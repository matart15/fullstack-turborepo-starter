/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/forbid-elements */
import { initializeApollo } from 'lib/apollo-client';
// import { addTranslationServerSideProps } from 'lib/i18nGetStaticProps';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import { useTranslation } from 'next-i18next';
import { CurrentUserDocument, CurrentUserQuery } from 'types/graphql';

type CurrentUser = {
  email: string;
  userId: string;
};
const Web: NextPage<CurrentUser> = (data): JSX.Element => {
  const { email, userId } = data;
  const { locale } = useRouter();
  // const { t } = useTranslation('common');
  return (
    <>
      <p>
        {locale === 'en' ? (
          <>EN</>
        ) : (
          <Link href="" locale="en">
            EN
          </Link>
        )}
        {' | '}
        {locale === 'ja' ? (
          <>JA</>
        ) : (
          <Link href="" locale="ja">
            JA
          </Link>
        )}
      </p>
      <p>welcome</p>
      <div>signed in user Id : {userId}</div>
      <div>signed in user email : {email}</div>
      <div>
        <Link href="/sign_in">signin</Link>
      </div>
      <div>
        <Link href="/sign_up">signup</Link>
      </div>
      <div>
        <Link href="/profile/change_password.tsx">change_password</Link>
      </div>
    </>
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
    const { id } = currentUserQueryResult.data.currentUser;
    const { email } = currentUserQueryResult.data.currentUser;
    return {
      props: {
        // ticketId,
        userId: id,
        email,
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
