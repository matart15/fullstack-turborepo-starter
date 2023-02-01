import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../../prisma/enum/sort-order.enum';

@InputType()
export class UserOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}
