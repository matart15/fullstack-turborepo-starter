import { SiteLayout } from 'ui/components/common/Layout';
import { UserEdit, UserEditProps } from 'ui/components/user/UserEdit';

import { EditViewModeSwitch } from '../utils/EditViewModeSwitch';

export const UserEditView = ({ user, onFinish, allPermissions }: UserEditProps): JSX.Element => {
  return (
    <SiteLayout breadCrumbItems={['Home', 'User', 'Detail']}>
      <EditViewModeSwitch>
        <UserEdit user={user} onFinish={onFinish} allPermissions={allPermissions} />
      </EditViewModeSwitch>
    </SiteLayout>
  );
};
