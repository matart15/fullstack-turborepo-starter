import { useDeleteUserMutation, UserListDocument, UserListQuery } from 'graphql/generated';
import { initializeApollo } from 'lib/apollo-client';
import { getPaginationDataAtServer } from 'lib/getPaginationAtServer';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import i18n from 'translation';
import { SearchCriteria, SearchField } from 'ui/components/common/Search';
import { getSearch } from 'ui/components/common/Search/getSearch';
import { popup } from 'ui/components/popup';
import { PaginationType } from 'ui/types/pagination';
import { useCurrentLocale } from 'ui/utils/common';
import { UserListView } from 'ui/views/UserListView';

const AVAILABLE_SEARCH_FIELDS: SearchField[] = [
  {
    name: 'name',
    type: 'string',
  },
  {
    name: 'email',
    type: 'string',
  },
  {
    name: 'createdAt',
    type: 'date',
  },
];

const ALLOWED_ORDER_FIELDS = ['name', 'email', 'createdAt', 'updatedAt'];
const DEFAULT_ORDER_FIELD = 'createdAt';

type UserListType = { userList: UserListQuery['findManyUsers']; pagination: PaginationType; search: SearchCriteria[] };
const UserList = (data: UserListType): JSX.Element => {
  const router = useRouter();
  const { userList, pagination } = data;
  const currentLocale = useCurrentLocale();
  i18n.changeLanguage(currentLocale); // hack. We could not easily set language on react component from next  path
  const [deleteUserMutation] = useDeleteUserMutation();
  const handleDelete = async (id: string): Promise<void> => {
    try {
      await deleteUserMutation({
        variables: {
          id,
        },
        refetchQueries: [{ query: UserListDocument }],
      });
      popup.success(i18n.t('common.succeeded'));
    } catch (error) {
      popup.error(error);
    }
  };
  return (
    <UserListView
      users={userList}
      handleDelete={handleDelete}
      pagination={pagination}
      availableSearchFields={AVAILABLE_SEARCH_FIELDS}
      onSearch={(values): void => {
        router.push({
          pathname: router.pathname,
          query: {
            ...router.query,
            search: JSON.stringify(values?.searchCriterias),
            page: 1,
          },
        });
      }}
    />
  );
};
export const getServerSideProps: GetServerSideProps<UserListType> = async context => {
  const { orderBy, pageSize, skip, currentPage, orderField, orderDirection } = getPaginationDataAtServer({
    context,
    allowedOrderFields: ALLOWED_ORDER_FIELDS,
    defaultOrderField: DEFAULT_ORDER_FIELD,
  });

  const { search } = getSearch({
    query: context.query,
    availableSearchFields: AVAILABLE_SEARCH_FIELDS,
  });

  const where = search
    .map(s => ({
      [s.fieldName]: {
        [s.condition]: s.value,
      },
    }))
    .reduce((acc, cur) => ({ ...acc, ...cur }), {});
  const client = initializeApollo({
    context,
  });
  try {
    const variables = {
      orderBy,
      take: pageSize,
      skip,
      where,
    };
    const userListQueryResult = await client.query<UserListQuery>({
      query: UserListDocument,
      variables,
    });
    return {
      props: {
        userList: userListQueryResult.data.findManyUsers,
        pagination: {
          current: currentPage,
          pageSize,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          total: (userListQueryResult.data as any).count || 0,
          orderField,
          orderDirection,
        },
        search,
      },
    };
  } catch (_error) {
    return {
      redirect: {
        destination: '/sign_in',
        permanent: false,
      },
    };
  }
};
export default UserList;
