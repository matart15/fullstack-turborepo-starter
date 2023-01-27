import { UserList, UserListProps } from '../components/UserList';

export type { SignInInterface } from '../components/SignIn/SignIn.interface';

export const UserListView = (p: UserListProps): JSX.Element => {
  return <UserList {...p} />;
};
