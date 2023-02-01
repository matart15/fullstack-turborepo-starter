import { Field, InputType } from '@nestjs/graphql';

import { DateTimeNullableWithAggregatesFilter } from '../../prisma/input/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../../prisma/input/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../../prisma/input/string-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/input/string-with-aggregates-filter.input';

@InputType()
export class UserScalarWhereWithAggregatesInput {
  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<UserScalarWhereWithAggregatesInput>;

  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<UserScalarWhereWithAggregatesInput>;

  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<UserScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: StringWithAggregatesFilter;

  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  name?: StringNullableWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  password?: StringWithAggregatesFilter;

  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  emailConfirmedAt?: DateTimeNullableWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  confirmationCode?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  roleId?: StringWithAggregatesFilter;
}
