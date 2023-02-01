import { ArgsType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { UserUpdateManyMutationInput } from '../input/user-update-many-mutation.input';
import { UserWhereInput } from '../input/user-where.input';

@ArgsType()
export class UpdateManyUserArgs {
  @Field(() => UserUpdateManyMutationInput, { nullable: false })
  @Type(() => UserUpdateManyMutationInput)
  data!: UserUpdateManyMutationInput;

  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;
}
