import { ChangePassword } from '../components/ChangePassword';

export type { ChangePasswordInterface } from '../components/ChangePassword/ChangePassword.interface';

type ChangePasswordProps = React.ComponentProps<typeof ChangePassword>;

export const ChangePasswordView = (p: ChangePasswordProps): JSX.Element => {
  return <ChangePassword {...p} />;
};
