import { Role } from '../../role/list/hooks';
import { Permission } from '../form/PermissionSelect';

export interface IUserList {
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
