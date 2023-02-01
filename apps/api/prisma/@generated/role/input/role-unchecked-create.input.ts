import { Field, InputType } from '@nestjs/graphql';

import { PermissionUncheckedCreateNestedManyWithoutRolesInput } from '../../permission/input/permission-unchecked-create-nested-many-without-roles.input';
import { UserUncheckedCreateNestedManyWithoutRoleInput } from '../../user/input/user-unchecked-create-nested-many-without-role.input';

@InputType()
export class RoleUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => UserUncheckedCreateNestedManyWithoutRoleInput, { nullable: true })
  users?: UserUncheckedCreateNestedManyWithoutRoleInput;

  @Field(() => PermissionUncheckedCreateNestedManyWithoutRolesInput, { nullable: true })
  permissions?: PermissionUncheckedCreateNestedManyWithoutRolesInput;
}
