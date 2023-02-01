import { ArgsType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { UserWhereInput } from '../input/user-where.input';

@ArgsType()
export class DeleteManyUserArgs {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: UserWhereInput;
}
