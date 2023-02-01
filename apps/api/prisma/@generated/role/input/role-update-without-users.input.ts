import { Field, InputType } from '@nestjs/graphql';

import { PermissionUpdateManyWithoutRolesNestedInput } from '../../permission/input/permission-update-many-without-roles-nested.input';
import { NullableStringFieldUpdateOperationsInput } from '../../prisma/input/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../prisma/input/string-field-update-operations.input';

@InputType()
export class RoleUpdateWithoutUsersInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: NullableStringFieldUpdateOperationsInput;

  @Field(() => PermissionUpdateManyWithoutRolesNestedInput, { nullable: true })
  permissions?: PermissionUpdateManyWithoutRolesNestedInput;
}
