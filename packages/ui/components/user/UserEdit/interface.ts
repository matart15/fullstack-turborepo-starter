import { Role } from '../../role/RoleList/hooks';
import { Permission } from './PermissionSelect';

export interface IUserEdit {
  id: string;
  name?: string | null;
  email: string;
  role?: Role;
  permissions?: Permission[];
  createdAt?: string;
  updatedAt?: string;
  emailConfirmedAt?: string;
  confirmationCode?: string;
}
