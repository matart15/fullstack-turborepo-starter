import { SiteLayout } from '../components/common/Layout';
import { UserList, UserListProps } from '../components/user/UserList';

export const UserListView = (p: UserListProps): JSX.Element => {
  return (
    <SiteLayout breadCrumbItems={['Home', 'User']}>
      <UserList {...p} />
    </SiteLayout>
  );
};
