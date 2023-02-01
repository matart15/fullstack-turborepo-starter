import { Field, InputType } from '@nestjs/graphql';

import { PermissionUncheckedCreateNestedManyWithoutRolesInput } from '../../permission/input/permission-unchecked-create-nested-many-without-roles.input';

@InputType()
export class RoleUncheckedCreateWithoutUsersInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => PermissionUncheckedCreateNestedManyWithoutRolesInput, { nullable: true })
  permissions?: PermissionUncheckedCreateNestedManyWithoutRolesInput;
}
