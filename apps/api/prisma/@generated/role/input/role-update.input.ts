import { Field, InputType } from '@nestjs/graphql';

import { PermissionUpdateManyWithoutRolesNestedInput } from '../../permission/input/permission-update-many-without-roles-nested.input';
import { NullableStringFieldUpdateOperationsInput } from '../../prisma/input/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../prisma/input/string-field-update-operations.input';
import { UserUpdateManyWithoutRoleNestedInput } from '../../user/input/user-update-many-without-role-nested.input';

@InputType()
export class RoleUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: NullableStringFieldUpdateOperationsInput;

  @Field(() => UserUpdateManyWithoutRoleNestedInput, { nullable: true })
  users?: UserUpdateManyWithoutRoleNestedInput;

  @Field(() => PermissionUpdateManyWithoutRolesNestedInput, { nullable: true })
  permissions?: PermissionUpdateManyWithoutRolesNestedInput;
}
