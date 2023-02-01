import { Field, InputType } from '@nestjs/graphql';

import { DateTimeFilter } from '../../prisma/input/date-time-filter.input';
import { DateTimeNullableFilter } from '../../prisma/input/date-time-nullable-filter.input';
import { StringFilter } from '../../prisma/input/string-filter.input';
import { StringNullableFilter } from '../../prisma/input/string-nullable-filter.input';

@InputType()
export class UserScalarWhereInput {
  @Field(() => [UserScalarWhereInput], { nullable: true })
  AND?: Array<UserScalarWhereInput>;

  @Field(() => [UserScalarWhereInput], { nullable: true })
  OR?: Array<UserScalarWhereInput>;

  @Field(() => [UserScalarWhereInput], { nullable: true })
  NOT?: Array<UserScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  email?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  name?: StringNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  password?: StringFilter;

  @Field(() => DateTimeNullableFilter, { nullable: true })
  emailConfirmedAt?: DateTimeNullableFilter;

  @Field(() => StringFilter, { nullable: true })
  confirmationCode?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  roleId?: StringFilter;
}
