---
to: apps/web/pages/<%= h.changeCase.camel(name) %>/index.tsx
---
import { useDelete<%= h.changeCase.pascal(name) %>Mutation, <%= h.changeCase.pascal(name) %>ListDocument, <%= h.changeCase.pascal(name) %>ListQuery } from 'graphql/generated';
import { initializeApollo } from 'lib/apollo-client';
import { getPaginationDataAtServer } from 'lib/getPaginationAtServer';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import i18n from 'translation';
import { popup } from 'ui/components/popup';
import { SearchCriteria, SearchField } from 'ui/components/common/Search';
import { PaginationType } from 'ui/types/pagination';
import { useCurrentLocale } from 'ui/utils/common';
import { <%= h.changeCase.pascal(name) %>ListView } from 'ui/views/<%= h.changeCase.pascal(name) %>ListView';
import { getSearch } from 'ui/components/common/Search/getSearch';

const AVAILABLE_SEARCH_FIELDS: SearchField[] = [
  {
    name: 'field',
    type: 'string',
  },
];

const ALLOWED_ORDER_FIELDS = ['field'];
const DEFAULT_ORDER_FIELD = 'field';

type <%= h.changeCase.pascal(name) %>ListType = { <%= h.changeCase.camel(name) %>List: <%= h.changeCase.pascal(name) %>ListQuery['findMany<%= h.changeCase.pascal(name) %>s']; pagination: PaginationType; search: SearchCriteria[] };
const <%= h.changeCase.pascal(name) %>List = (data: <%= h.changeCase.pascal(name) %>ListType): JSX.Element => {
  const router = useRouter();
  const { <%= h.changeCase.camel(name) %>List, pagination } = data;
  const currentLocale = useCurrentLocale();
  i18n.changeLanguage(currentLocale); // hack. We could not easily set language on react component from next  path
  const [delete<%= h.changeCase.pascal(name) %>Mutation] = useDelete<%= h.changeCase.pascal(name) %>Mutation();
  const handleDelete = async (id: string): Promise<void> => {
    try {
      await delete<%= h.changeCase.pascal(name) %>Mutation({
        variables: {
          id,
        },
        refetchQueries: [{ query: <%= h.changeCase.pascal(name) %>ListDocument }],
      });
      popup.success(i18n.t('common.succeeded'));
    } catch (error) {
      popup.error(error);
    }
  };
  return (
    <<%= h.changeCase.pascal(name) %>ListView
      <%= h.changeCase.camel(name) %>s={<%= h.changeCase.camel(name) %>List}
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
export const getServerSideProps: GetServerSideProps<<%= h.changeCase.pascal(name) %>ListType> = async context => {
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
    const <%= h.changeCase.camel(name) %>ListQueryResult = await client.query<<%= h.changeCase.pascal(name) %>ListQuery>({
      query: <%= h.changeCase.pascal(name) %>ListDocument,
      variables,
    });
    return {
      props: {
        <%= h.changeCase.camel(name) %>List: <%= h.changeCase.camel(name) %>ListQueryResult.data.findMany<%= h.changeCase.pascal(name) %>s,
        pagination: {
          current: currentPage,
          pageSize: pageSize,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          total: (<%= h.changeCase.camel(name) %>ListQueryResult.data as any).count || 0,
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
export default <%= h.changeCase.pascal(name) %>List;
