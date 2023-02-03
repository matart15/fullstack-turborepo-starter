import { SiteLayout } from '../components/common/Layout';
import { RoleDetail } from '../components/role/RoleDetail';
import { Role } from '../components/role/RoleList/hooks';

export const RoleDetailView = ({ role }: { role?: Role | null }): JSX.Element => {
  return (
    <SiteLayout breadCrumbItems={['Home', 'Role', 'Detail']}>
      <RoleDetail role={role} />
    </SiteLayout>
  );
};
