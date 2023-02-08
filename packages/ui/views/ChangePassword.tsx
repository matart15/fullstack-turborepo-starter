import { ChangePassword } from 'ui/components/auth/ChangePassword';

export type { ChangePasswordInterface } from 'ui/components/auth/ChangePassword/ChangePassword.interface';

type ChangePasswordProps = React.ComponentProps<typeof ChangePassword>;

export const ChangePasswordView = (p: ChangePasswordProps): JSX.Element => {
  return <ChangePassword {...p} />;
};
