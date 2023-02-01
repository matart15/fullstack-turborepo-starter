import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { RoleScalarFieldEnum } from '../enum/role-scalar-field.enum';
import { RoleOrderByWithRelationInput } from '../input/role-order-by-with-relation.input';
import { RoleWhereInput } from '../input/role-where.input';
import { RoleWhereUniqueInput } from '../input/role-where-unique.input';

@ArgsType()
export class FindManyRoleArgs {
  @Field(() => RoleWhereInput, { nullable: true })
  @Type(() => RoleWhereInput)
  where?: RoleWhereInput;

  @Field(() => [RoleOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<RoleOrderByWithRelationInput>;

  @Field(() => RoleWhereUniqueInput, { nullable: true })
  cursor?: RoleWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [RoleScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof RoleScalarFieldEnum>;
}
