import { ArgsType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { RoleUpdateInput } from '../input/role-update.input';
import { RoleWhereUniqueInput } from '../input/role-where-unique.input';

@ArgsType()
export class UpdateOneRoleArgs {
  @Field(() => RoleUpdateInput, { nullable: false })
  @Type(() => RoleUpdateInput)
  data!: RoleUpdateInput;

  @Field(() => RoleWhereUniqueInput, { nullable: false })
  @Type(() => RoleWhereUniqueInput)
  where!: RoleWhereUniqueInput;
}
