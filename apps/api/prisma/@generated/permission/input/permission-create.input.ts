import { Field, InputType } from '@nestjs/graphql';

import { PermissionOperation } from '../../prisma/enum/permission-operation.enum';
import { RoleCreateNestedManyWithoutPermissionsInput } from '../../role/input/role-create-nested-many-without-permissions.input';
import { UserCreateNestedManyWithoutPermissionsInput } from '../../user/input/user-create-nested-many-without-permissions.input';

@InputType()
export class PermissionCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  tableName!: string;

  @Field(() => PermissionOperation, { nullable: false })
  operation!: keyof typeof PermissionOperation;

  @Field(() => UserCreateNestedManyWithoutPermissionsInput, { nullable: true })
  users?: UserCreateNestedManyWithoutPermissionsInput;

  @Field(() => RoleCreateNestedManyWithoutPermissionsInput, { nullable: true })
  roles?: RoleCreateNestedManyWithoutPermissionsInput;
}
