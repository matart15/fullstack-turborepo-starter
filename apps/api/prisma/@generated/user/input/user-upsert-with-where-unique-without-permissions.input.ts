import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { UserCreateWithoutPermissionsInput } from './user-create-without-permissions.input';
import { UserUpdateWithoutPermissionsInput } from './user-update-without-permissions.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutPermissionsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @Field(() => UserUpdateWithoutPermissionsInput, { nullable: false })
  @Type(() => UserUpdateWithoutPermissionsInput)
  update!: UserUpdateWithoutPermissionsInput;

  @Field(() => UserCreateWithoutPermissionsInput, { nullable: false })
  @Type(() => UserCreateWithoutPermissionsInput)
  create!: UserCreateWithoutPermissionsInput;
}
