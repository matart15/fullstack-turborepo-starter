import { Field, InputType } from '@nestjs/graphql';

import { PermissionUncheckedUpdateManyWithoutRolesNestedInput } from '../../permission/input/permission-unchecked-update-many-without-roles-nested.input';
import { NullableStringFieldUpdateOperationsInput } from '../../prisma/input/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../prisma/input/string-field-update-operations.input';

@InputType()
export class RoleUncheckedUpdateWithoutUsersInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: NullableStringFieldUpdateOperationsInput;

  @Field(() => PermissionUncheckedUpdateManyWithoutRolesNestedInput, { nullable: true })
  permissions?: PermissionUncheckedUpdateManyWithoutRolesNestedInput;
}
