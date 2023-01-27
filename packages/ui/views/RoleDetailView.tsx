import { RoleDetail } from '../components/RoleDetail';
import { Role } from '../components/RoleList/hooks';

export const RoleDetailView = ({ role }: { role?: Role | null }): JSX.Element => {
  return <RoleDetail role={role} />;
};
