import { ArgsType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { PermissionWhereInput } from '../input/permission-where.input';

@ArgsType()
export class DeleteManyPermissionArgs {
  @Field(() => PermissionWhereInput, { nullable: true })
  @Type(() => PermissionWhereInput)
  where?: PermissionWhereInput;
}
