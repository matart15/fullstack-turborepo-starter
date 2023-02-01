import { ArgsType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { UserCreateInput } from '../input/user-create.input';
import { UserUpdateInput } from '../input/user-update.input';
import { UserWhereUniqueInput } from '../input/user-where-unique.input';

@ArgsType()
export class UpsertOneUserArgs {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateInput, { nullable: false })
  @Type(() => UserCreateInput)
  create!: UserCreateInput;

  @Field(() => UserUpdateInput, { nullable: false })
  @Type(() => UserUpdateInput)
  update!: UserUpdateInput;
}
