import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { UserScalarFieldEnum } from '../enum/user-scalar-field.enum';
import { UserOrderByWithRelationInput } from '../input/user-order-by-with-relation.input';
import { UserWhereInput } from '../input/user-where.input';
import { UserWhereUniqueInput } from '../input/user-where-unique.input';

@ArgsType()
export class FindManyUserArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;

  @Field(() => [UserOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UserOrderByWithRelationInput>;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: UserWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [UserScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
