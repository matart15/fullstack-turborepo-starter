import { Field, InputType } from '@nestjs/graphql';

import { StringNullableWithAggregatesFilter } from '../../prisma/input/string-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/input/string-with-aggregates-filter.input';

@InputType()
export class RoleScalarWhereWithAggregatesInput {
  @Field(() => [RoleScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<RoleScalarWhereWithAggregatesInput>;

  @Field(() => [RoleScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<RoleScalarWhereWithAggregatesInput>;

  @Field(() => [RoleScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<RoleScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  description?: StringNullableWithAggregatesFilter;
}
