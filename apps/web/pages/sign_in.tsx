import { useAuth } from 'contexts/auth';
import Router from 'next/router';
import { useEffect } from 'react';
import { SignInInterface, SignInView } from 'ui/views/SignInView';

const SignInPage = (): JSX.Element => {
  const { currentUser, signIn } = useAuth();

  useEffect(() => {
    if (currentUser) {
      Router.push('/').catch(_e => {});
    }
  }, [currentUser]);
  return (
    <SignInView
      recaptchaSitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
      onSubmit={async (fields: SignInInterface): Promise<void> => {
        signIn({
          email: fields.email || '',
          password: fields.password || '',
        });
      }}
    />
  );
};
export default SignInPage;
