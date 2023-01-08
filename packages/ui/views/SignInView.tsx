import { SignIn, SignInProps } from '../components/SignIn';

export type { SignInInterface } from '../components/SignIn/SignIn.interface';

export const SignInView = (p: SignInProps): JSX.Element => {
  return <SignIn {...p} />;
};
