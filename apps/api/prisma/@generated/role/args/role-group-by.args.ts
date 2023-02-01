import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { RoleScalarFieldEnum } from '../enum/role-scalar-field.enum';
import { RoleCountAggregateInput } from '../input/role-count-aggregate.input';
import { RoleMaxAggregateInput } from '../input/role-max-aggregate.input';
import { RoleMinAggregateInput } from '../input/role-min-aggregate.input';
import { RoleOrderByWithAggregationInput } from '../input/role-order-by-with-aggregation.input';
import { RoleScalarWhereWithAggregatesInput } from '../input/role-scalar-where-with-aggregates.input';
import { RoleWhereInput } from '../input/role-where.input';

@ArgsType()
export class RoleGroupByArgs {
  @Field(() => RoleWhereInput, { nullable: true })
  @Type(() => RoleWhereInput)
  where?: RoleWhereInput;

  @Field(() => [RoleOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<RoleOrderByWithAggregationInput>;

  @Field(() => [RoleScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof RoleScalarFieldEnum>;

  @Field(() => RoleScalarWhereWithAggregatesInput, { nullable: true })
  having?: RoleScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => RoleCountAggregateInput, { nullable: true })
  _count?: RoleCountAggregateInput;

  @Field(() => RoleMinAggregateInput, { nullable: true })
  _min?: RoleMinAggregateInput;

  @Field(() => RoleMaxAggregateInput, { nullable: true })
  _max?: RoleMaxAggregateInput;
}
