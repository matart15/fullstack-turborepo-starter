import { UserDetailDocument, UserDetailQuery } from 'graphql/generated';
import { initializeApollo } from 'lib/apollo-client';
import { changeLocale } from 'lib/changeLocale';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { SiteLayout } from 'ui/components/Layout';
import { AllowedLanguages } from 'ui/utils/common';
import { ProfileView } from 'ui/views/ProfileView';

type UserDetailProps = { user: UserDetailQuery['User_by_pk'] };
const UserDetail: NextPage<UserDetailProps> = (data: UserDetailProps): JSX.Element => {
  const router = useRouter();
  const { user } = data;
  return (
    <SiteLayout breadCrumbItems={['Home', 'User', 'Detail']}>
      <ProfileView
        user={user}
        handleLocaleChange={(newLocale: AllowedLanguages): void => {
          changeLocale({
            locale: newLocale,
            router,
          });
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
    const currentUserQueryResult = await client.query<UserDetailQuery>({
      query: UserDetailDocument,
      variables: { id },
    });
    return {
      props: {
        user: currentUserQueryResult.data.User_by_pk,
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
