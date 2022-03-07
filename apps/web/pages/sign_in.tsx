import { useAuth } from 'contexts/auth';
import Router from 'next/router';
import { useEffect } from 'react';
import SignInForm, { SignInFormInputValues } from 'ui/src/ui-components/SignInForm';

const SignInPage = (): JSX.Element => {
  const { currentUser, signIn } = useAuth();

  useEffect(() => {
    if (currentUser) {
      Router.push('/').catch(_e => {});
    }
  }, [currentUser]);
  return (
    <SignInForm
      onSubmit={async (fields: SignInFormInputValues): Promise<void> => {
        try {
          signIn({
            email: fields.email || '',
            password: fields.password || '',
          });
        } catch (error: unknown) {
          if (error instanceof Error) {
            console.error(error.message);
          }
        }
      }}
    />
  );
};
export default SignInPage;
