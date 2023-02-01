import { UserDetail, UserDetailProps } from '../components/UserDetail';

export const UserDetailView = ({ user, onFinish, allPermissions }: UserDetailProps): JSX.Element => {
  return <UserDetail user={user} onFinish={onFinish} allPermissions={allPermissions} />;
};
