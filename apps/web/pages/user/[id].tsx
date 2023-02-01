import { PermissionListDocument, PermissionListQuery, UserDetailDocument, UserDetailQuery } from 'graphql/generated';
import { initializeApollo } from 'lib/apollo-client';
import { GetServerSideProps, NextPage } from 'next';
import { SiteLayout } from 'ui/components/Layout';
import { UserDetailView } from 'ui/views/UserDetailView';

type UserDetailProps = { user: UserDetailQuery['User_by_pk']; allPermissions: PermissionListQuery['Permission'] };
const UserDetail: NextPage<UserDetailProps> = (data: UserDetailProps): JSX.Element => {
  const { user, allPermissions } = data;
  return (
    <SiteLayout breadCrumbItems={['Home', 'User', 'Detail']}>
      <UserDetailView
        user={user}
        allPermissions={allPermissions.map(permission => ({
          name: `${permission.tableName}.${permission.operation}`,
          id: permission.id,
        }))}
        onFinish={(value): void => {
          // eslint-disable-next-line no-console
          console.log('onFinish', value);
        }}
      />
    </SiteLayout>
  );
};
export const getServerSideProps: GetServerSideProps = async context => {
  // const cookies = context.req.headers.cookie;
  // const { params } = context
  // const { ticketId } = params as { ticketId: string }

  const { id } = context.query;

  const client = initializeApollo({
    context,
  });
  try {
    const userDetailQueryResult = await client.query<UserDetailQuery>({
      query: UserDetailDocument,
      variables: { id },
    });

    const permissionListQueryResult = await client.query<PermissionListQuery>({
      query: PermissionListDocument,
    });
    return {
      props: {
        user: userDetailQueryResult.data.User_by_pk,
        allPermissions: permissionListQueryResult.data.Permission,
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

export default UserDetail;
