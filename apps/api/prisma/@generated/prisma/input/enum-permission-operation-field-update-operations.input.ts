import { Field, InputType } from '@nestjs/graphql';

import { PermissionOperation } from '../enum/permission-operation.enum';

@InputType()
export class EnumPermissionOperationFieldUpdateOperationsInput {
  @Field(() => PermissionOperation, { nullable: true })
  set?: keyof typeof PermissionOperation;
}
