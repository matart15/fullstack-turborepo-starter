import { RoleList, RoleListProps } from '../components/RoleList';

export type { SignInInterface } from '../components/SignIn/SignIn.interface';

export const RoleListView = (p: RoleListProps): JSX.Element => {
  return <RoleList {...p} />;
};
