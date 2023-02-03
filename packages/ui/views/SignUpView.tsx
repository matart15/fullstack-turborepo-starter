import { SignUp, SignUpProps } from '../components/auth/SignUp';

export type { SignUpInterface } from '../components/auth/SignUp/SignUp.interface';

export const SignUpView = (p: SignUpProps): JSX.Element => {
  return <SignUp {...p} />;
};
