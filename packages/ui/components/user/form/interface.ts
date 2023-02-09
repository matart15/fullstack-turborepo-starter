import { Role } from '../../role/list/hooks';
import { Permission } from './PermissionSelect';

export interface IUserForm {
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
