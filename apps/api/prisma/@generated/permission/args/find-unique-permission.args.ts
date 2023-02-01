import { ArgsType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { PermissionWhereUniqueInput } from '../input/permission-where-unique.input';

@ArgsType()
export class FindUniquePermissionArgs {
  @Field(() => PermissionWhereUniqueInput, { nullable: false })
  @Type(() => PermissionWhereUniqueInput)
  where!: PermissionWhereUniqueInput;
}
