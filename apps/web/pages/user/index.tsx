import { UserListDocument, UserListQuery } from 'graphql/generated';
import { initializeApollo } from 'lib/apollo-client';
import { GetServerSideProps } from 'next';
import { SiteLayout } from 'ui/components/Layout';
import { UserListView } from 'ui/views/UserListView';

const UserList = (data: { userList: UserListQuery['User'] }): JSX.Element => {
  const { userList } = data;
  return (
    <SiteLayout breadCrumbItems={['Home', 'User']}>
      <UserListView users={userList} />
    </SiteLayout>
  );
};
export const getServerSideProps: GetServerSideProps = async context => {
  const client = initializeApollo({
    context,
  });
  try {
    const currentUserQueryResult = await client.query<UserListQuery>({
      query: UserListDocument,
    });
    return {
      props: {
        userList: currentUserQueryResult.data.User,
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
