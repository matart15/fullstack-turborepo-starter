import { ArgsType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { RoleWhereUniqueInput } from '../input/role-where-unique.input';

@ArgsType()
export class FindUniqueRoleOrThrowArgs {
  @Field(() => RoleWhereUniqueInput, { nullable: false })
  @Type(() => RoleWhereUniqueInput)
  where!: RoleWhereUniqueInput;
}
