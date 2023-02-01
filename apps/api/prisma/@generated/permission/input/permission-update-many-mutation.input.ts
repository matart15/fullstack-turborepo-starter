import { Field, InputType } from '@nestjs/graphql';

import { EnumPermissionOperationFieldUpdateOperationsInput } from '../../prisma/input/enum-permission-operation-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../prisma/input/string-field-update-operations.input';

@InputType()
export class PermissionUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  tableName?: StringFieldUpdateOperationsInput;

  @Field(() => EnumPermissionOperationFieldUpdateOperationsInput, { nullable: true })
  operation?: EnumPermissionOperationFieldUpdateOperationsInput;
}
