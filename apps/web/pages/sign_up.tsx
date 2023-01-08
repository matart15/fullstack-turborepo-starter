import { useAuth } from 'contexts/auth';
import Router from 'next/router';
import { useEffect } from 'react';
import { SignUpInterface, SignUpView } from 'ui/views/SignUpView';

const SignInPage = (): JSX.Element => {
  const { currentUser, signUp } = useAuth();

  useEffect(() => {
    if (currentUser) {
      Router.push('/').catch(_e => {});
    }
  }, [currentUser]);
  return (
    <SignUpView
      recaptchaSitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
      onSubmit={async (fields: SignUpInterface): Promise<void> => {
        signUp({
          email: fields.email || '',
          password: fields.password || '',
        });
      }}
    />
  );
};
export default SignInPage;
