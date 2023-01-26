import { initializeApollo } from 'lib/apollo-client';
import { changeLocale } from 'lib/changeLocale';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { CurrentUserDocument, CurrentUserQuery } from 'types/graphql';
import { SiteLayout } from 'ui/components/Layout';
import { AllowedLanguages } from 'ui/utils/common';
import { ProfileView } from 'ui/views/ProfileView';

const Web: NextPage<CurrentUserQuery> = (data: CurrentUserQuery): JSX.Element => {
  const router = useRouter();
  const { currentUser } = data;
  return (
    <SiteLayout breadCrumbItems={['Home', 'App', 'Dashboard']}>
      <ProfileView
        user={currentUser}
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

  const client = initializeApollo({
    context,
  });
  try {
    const currentUserQueryResult = await client.query<CurrentUserQuery>({
      query: CurrentUserDocument,
      // variables: { id: ticketId }
    });
    return {
      props: {
        currentUser: currentUserQueryResult.data.currentUser,
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

export default Web;
