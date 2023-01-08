import { SignUp, SignUpProps } from '../components/SignUp';

export type { SignUpInterface } from '../components/SignUp/SignUp.interface';

export const SignUpView = (p: SignUpProps): JSX.Element => {
  return <SignUp {...p} />;
};
