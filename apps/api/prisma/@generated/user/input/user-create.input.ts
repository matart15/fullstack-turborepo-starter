import { Field, InputType } from '@nestjs/graphql';

import { PermissionCreateNestedManyWithoutUsersInput } from '../../permission/input/permission-create-nested-many-without-users.input';
import { RoleCreateNestedOneWithoutUsersInput } from '../../role/input/role-create-nested-one-without-users.input';

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => Date, { nullable: true })
  emailConfirmedAt?: Date | string;

  @Field(() => String, { nullable: false })
  confirmationCode!: string;

  @Field(() => RoleCreateNestedOneWithoutUsersInput, { nullable: false })
  role!: RoleCreateNestedOneWithoutUsersInput;

  @Field(() => PermissionCreateNestedManyWithoutUsersInput, { nullable: true })
  permissions?: PermissionCreateNestedManyWithoutUsersInput;
}
