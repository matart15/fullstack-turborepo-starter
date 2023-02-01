import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { UserUpdateWithoutPermissionsInput } from './user-update-without-permissions.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutPermissionsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: UserWhereUniqueInput;

  @Field(() => UserUpdateWithoutPermissionsInput, { nullable: false })
  @Type(() => UserUpdateWithoutPermissionsInput)
  data!: UserUpdateWithoutPermissionsInput;
}
