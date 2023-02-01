import { Field, InputType } from '@nestjs/graphql';

import { EnumPermissionOperationFieldUpdateOperationsInput } from '../../prisma/input/enum-permission-operation-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../prisma/input/string-field-update-operations.input';
import { UserUpdateManyWithoutPermissionsNestedInput } from '../../user/input/user-update-many-without-permissions-nested.input';

@InputType()
export class PermissionUpdateWithoutRolesInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  tableName?: StringFieldUpdateOperationsInput;

  @Field(() => EnumPermissionOperationFieldUpdateOperationsInput, { nullable: true })
  operation?: EnumPermissionOperationFieldUpdateOperationsInput;

  @Field(() => UserUpdateManyWithoutPermissionsNestedInput, { nullable: true })
  users?: UserUpdateManyWithoutPermissionsNestedInput;
}
