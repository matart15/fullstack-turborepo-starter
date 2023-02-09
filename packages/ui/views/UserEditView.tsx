import { SiteLayout } from 'ui/components/common/Layout';
import { UserForm, UserFormProps } from 'ui/components/user/form';

import { FormModeSwitch } from '../utils/FormModeSwitch';

export const UserEditView = ({ user, onFinish, allPermissions }: UserFormProps): JSX.Element => {
  return (
    <SiteLayout breadCrumbItems={['Home', 'User', 'Detail']}>
      <FormModeSwitch>
        <UserForm user={user} onFinish={onFinish} allPermissions={allPermissions} />
      </FormModeSwitch>
    </SiteLayout>
  );
};
