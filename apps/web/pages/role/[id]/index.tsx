import { RoleDetailDocument, RoleDetailQuery } from 'graphql/generated';
import { initializeApollo } from 'lib/apollo-client';
import { GetServerSideProps, NextPage } from 'next';
import { SiteLayout } from 'ui/components/Layout';
import { RoleDetailView } from 'ui/views/RoleDetailView';

type RoleDetailProps = { role: RoleDetailQuery['findUniqueRole'] };
const RoleDetail: NextPage<RoleDetailProps> = (data: RoleDetailProps): JSX.Element => {
  const { role } = data;
  return (
    <SiteLayout breadCrumbItems={['Home', 'Role', 'Detail']}>
      <RoleDetailView role={role} />
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
    const roleDetailQueryResult = await client.query<RoleDetailQuery>({
      query: RoleDetailDocument,
      variables: {
        where: {
          id,
        },
      },
    });
    return {
      props: {
        role: roleDetailQueryResult.data.findUniqueRole,
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

export default RoleDetail;
