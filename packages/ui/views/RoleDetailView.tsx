import { SiteLayout } from 'ui/components/common/Layout';
import { RoleDetail } from 'ui/components/role/RoleDetail';
import { Role } from 'ui/components/role/RoleList/hooks';

export const RoleDetailView = ({ role }: { role?: Role | null }): JSX.Element => {
  return (
    <SiteLayout breadCrumbItems={['Home', 'Role', 'Detail']}>
      <RoleDetail role={role} />
    </SiteLayout>
  );
};
