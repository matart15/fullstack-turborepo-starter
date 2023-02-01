import { Field, InputType } from '@nestjs/graphql';

import { PermissionCreateNestedManyWithoutRolesInput } from '../../permission/input/permission-create-nested-many-without-roles.input';

@InputType()
export class RoleCreateWithoutUsersInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => PermissionCreateNestedManyWithoutRolesInput, { nullable: true })
  permissions?: PermissionCreateNestedManyWithoutRolesInput;
}
