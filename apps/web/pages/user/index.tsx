import { useDeleteUserMutation, UserListDocument, UserListQuery } from 'graphql/generated';
import { initializeApollo } from 'lib/apollo-client';
import { GetServerSideProps } from 'next';
import i18n from 'translation';
import { popup } from 'ui/components/popup';
import { useCurrentLocale } from 'ui/utils/common';
import { UserListView } from 'ui/views/UserListView';

const UserList = (data: { userList: UserListQuery['findManyUsers'] }): JSX.Element => {
  const { userList } = data;
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
  return <UserListView users={userList} handleDelete={handleDelete} />;
};
export const getServerSideProps: GetServerSideProps = async context => {
  const client = initializeApollo({
    context,
  });
  try {
    const userListQueryResult = await client.query<UserListQuery>({
      query: UserListDocument,
    });
    return {
      props: {
        userList: userListQueryResult.data.findManyUsers,
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
