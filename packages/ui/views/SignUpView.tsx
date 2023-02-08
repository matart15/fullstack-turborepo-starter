import { SignUp, SignUpProps } from 'ui/components/auth/SignUp';

export type { SignUpInterface } from 'ui/components/auth/SignUp/SignUp.interface';

export const SignUpView = (p: SignUpProps): JSX.Element => {
  return <SignUp {...p} />;
};
