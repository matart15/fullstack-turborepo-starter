import { SiteLayout } from 'ui/components/common/Layout';
import { RoleForm, RoleFormProps } from 'ui/components/role/form';
import { FORM_MODE } from 'ui/utils/formMode';

export const RoleAddView = ({ onFinish }: RoleFormProps): JSX.Element => {
  return (
    <SiteLayout breadCrumbItems={['Home', 'Role', 'New']}>
      <RoleForm onFinish={onFinish} formMode={FORM_MODE.CREATE} />
    </SiteLayout>
  );
};
