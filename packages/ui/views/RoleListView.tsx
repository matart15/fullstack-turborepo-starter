import { SiteLayout } from '../components/common/Layout';
import { RoleList, RoleListProps } from '../components/role/RoleList';

export const RoleListView = (p: RoleListProps): JSX.Element => {
  return (
    <SiteLayout breadCrumbItems={['Home', 'Role']}>
      <RoleList {...p} />
    </SiteLayout>
  );
};
