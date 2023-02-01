import { Field, InputType } from '@nestjs/graphql';

import { EnumPermissionOperationFieldUpdateOperationsInput } from '../../prisma/input/enum-permission-operation-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../prisma/input/string-field-update-operations.input';
import { RoleUncheckedUpdateManyWithoutPermissionsNestedInput } from '../../role/input/role-unchecked-update-many-without-permissions-nested.input';
import { UserUncheckedUpdateManyWithoutPermissionsNestedInput } from '../../user/input/user-unchecked-update-many-without-permissions-nested.input';

@InputType()
export class PermissionUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  tableName?: StringFieldUpdateOperationsInput;

  @Field(() => EnumPermissionOperationFieldUpdateOperationsInput, { nullable: true })
  operation?: EnumPermissionOperationFieldUpdateOperationsInput;

  @Field(() => UserUncheckedUpdateManyWithoutPermissionsNestedInput, { nullable: true })
  users?: UserUncheckedUpdateManyWithoutPermissionsNestedInput;

  @Field(() => RoleUncheckedUpdateManyWithoutPermissionsNestedInput, { nullable: true })
  roles?: RoleUncheckedUpdateManyWithoutPermissionsNestedInput;
}
