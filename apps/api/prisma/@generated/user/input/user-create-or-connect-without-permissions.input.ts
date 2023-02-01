import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { UserCreateWithoutPermissionsInput } from './user-create-without-permissions.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOrConnectWithoutPermissionsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @Field(() => UserCreateWithoutPermissionsInput, { nullable: false })
  @Type(() => UserCreateWithoutPermissionsInput)
  create!: UserCreateWithoutPermissionsInput;
}
