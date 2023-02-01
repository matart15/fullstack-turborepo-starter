import { Field, InputType } from '@nestjs/graphql';

import { PermissionOperation } from '../../prisma/enum/permission-operation.enum';

@InputType()
export class PermissionCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  tableName!: string;

  @Field(() => PermissionOperation, { nullable: false })
  operation!: keyof typeof PermissionOperation;
}
