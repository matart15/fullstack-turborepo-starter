import { SiteLayout } from 'ui/components/common/Layout';
import { UserForm, UserFormProps } from 'ui/components/user/form';
import { FORM_MODE } from 'ui/utils/formMode';

export const UserAddView = ({ onFinish, allPermissions }: UserFormProps): JSX.Element => {
  return (
    <SiteLayout breadCrumbItems={['Home', 'User', 'New']}>
      <UserForm onFinish={onFinish} allPermissions={allPermissions} formMode={FORM_MODE.CREATE} />
    </SiteLayout>
  );
};
