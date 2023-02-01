import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { PermissionCountAggregateInput } from '../input/permission-count-aggregate.input';
import { PermissionMaxAggregateInput } from '../input/permission-max-aggregate.input';
import { PermissionMinAggregateInput } from '../input/permission-min-aggregate.input';
import { PermissionOrderByWithRelationInput } from '../input/permission-order-by-with-relation.input';
import { PermissionWhereInput } from '../input/permission-where.input';
import { PermissionWhereUniqueInput } from '../input/permission-where-unique.input';

@ArgsType()
export class PermissionAggregateArgs {
  @Field(() => PermissionWhereInput, { nullable: true })
  @Type(() => PermissionWhereInput)
  where?: PermissionWhereInput;

  @Field(() => [PermissionOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PermissionOrderByWithRelationInput>;

  @Field(() => PermissionWhereUniqueInput, { nullable: true })
  cursor?: PermissionWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => PermissionCountAggregateInput, { nullable: true })
  _count?: PermissionCountAggregateInput;

  @Field(() => PermissionMinAggregateInput, { nullable: true })
  _min?: PermissionMinAggregateInput;

  @Field(() => PermissionMaxAggregateInput, { nullable: true })
  _max?: PermissionMaxAggregateInput;
}
