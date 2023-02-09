import { SiteLayout } from 'ui/components/common/Layout';
import { RoleForm, RoleFormProps } from 'ui/components/role/form';

import { FormModeSwitch } from '../utils/FormModeSwitch';

export const RoleEditView = ({ role, onFinish }: RoleFormProps): JSX.Element => {
  return (
    <SiteLayout breadCrumbItems={['Home', 'Role', 'Detail']}>
      <FormModeSwitch>
        <RoleForm role={role} onFinish={onFinish} />
      </FormModeSwitch>
    </SiteLayout>
  );
};
