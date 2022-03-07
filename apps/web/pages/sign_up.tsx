import { useAuth } from 'contexts/auth';
import Router from 'next/router';
import { useEffect } from 'react';
import SignUpForm, { SignUpFormInputValues } from 'ui/src/ui-components/SignUpForm';

const SignUpPage = (): JSX.Element => {
  const { currentUser, signUp } = useAuth();

  useEffect(() => {
    if (currentUser) {
      Router.push('/').catch(_e => {});
    }
  }, [currentUser]);
  return (
    <SignUpForm
      onSubmit={async (fields: SignUpFormInputValues): Promise<void> => {
        try {
          signUp({
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
export default SignUpPage;
