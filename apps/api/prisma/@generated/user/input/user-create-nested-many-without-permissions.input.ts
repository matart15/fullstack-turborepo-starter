import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { UserCreateOrConnectWithoutPermissionsInput } from './user-create-or-connect-without-permissions.input';
import { UserCreateWithoutPermissionsInput } from './user-create-without-permissions.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutPermissionsInput {
  @Field(() => [UserCreateWithoutPermissionsInput], { nullable: true })
  @Type(() => UserCreateWithoutPermissionsInput)
  create?: Array<UserCreateWithoutPermissionsInput>;

  @Field(() => [UserCreateOrConnectWithoutPermissionsInput], { nullable: true })
  @Type(() => UserCreateOrConnectWithoutPermissionsInput)
  connectOrCreate?: Array<UserCreateOrConnectWithoutPermissionsInput>;

  @Field(() => [UserWhereUniqueInput], { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Array<UserWhereUniqueInput>;
}
