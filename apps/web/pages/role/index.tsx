import { RoleListDocument, RoleListQuery } from 'graphql/generated';
import { initializeApollo } from 'lib/apollo-client';
import { GetServerSideProps } from 'next';
import { SiteLayout } from 'ui/components/Layout';
import { RoleListView } from 'ui/views/RoleListView';

const RoleList = (data: { roleList: RoleListQuery['Role'] }): JSX.Element => {
  const { roleList } = data;
  return (
    <SiteLayout breadCrumbItems={['Home', 'Role']}>
      <RoleListView roles={roleList} />
    </SiteLayout>
  );
};
export const getServerSideProps: GetServerSideProps = async context => {
  const client = initializeApollo({
    context,
  });
  try {
    const currentRoleQueryResult = await client.query<RoleListQuery>({
      query: RoleListDocument,
    });
    return {
      props: {
        roleList: currentRoleQueryResult.data.Role,
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
export default RoleList;
