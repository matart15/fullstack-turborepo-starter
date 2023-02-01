import { Field, InputType } from '@nestjs/graphql';

import { PermissionCreateNestedManyWithoutRolesInput } from '../../permission/input/permission-create-nested-many-without-roles.input';
import { UserCreateNestedManyWithoutRoleInput } from '../../user/input/user-create-nested-many-without-role.input';

@InputType()
export class RoleCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => UserCreateNestedManyWithoutRoleInput, { nullable: true })
  users?: UserCreateNestedManyWithoutRoleInput;

  @Field(() => PermissionCreateNestedManyWithoutRolesInput, { nullable: true })
  permissions?: PermissionCreateNestedManyWithoutRolesInput;
}
