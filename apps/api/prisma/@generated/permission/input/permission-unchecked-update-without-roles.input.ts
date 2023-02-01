import { Field, InputType } from '@nestjs/graphql';

import { EnumPermissionOperationFieldUpdateOperationsInput } from '../../prisma/input/enum-permission-operation-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../prisma/input/string-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutPermissionsNestedInput } from '../../user/input/user-unchecked-update-many-without-permissions-nested.input';

@InputType()
export class PermissionUncheckedUpdateWithoutRolesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  tableName?: StringFieldUpdateOperationsInput;

  @Field(() => EnumPermissionOperationFieldUpdateOperationsInput, { nullable: true })
  operation?: EnumPermissionOperationFieldUpdateOperationsInput;

  @Field(() => UserUncheckedUpdateManyWithoutPermissionsNestedInput, { nullable: true })
  users?: UserUncheckedUpdateManyWithoutPermissionsNestedInput;
}
