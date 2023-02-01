import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { PermissionCreateWithoutUsersInput } from './permission-create-without-users.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@InputType()
export class PermissionCreateOrConnectWithoutUsersInput {
  @Field(() => PermissionWhereUniqueInput, { nullable: false })
  @Type(() => PermissionWhereUniqueInput)
  where!: PermissionWhereUniqueInput;

  @Field(() => PermissionCreateWithoutUsersInput, { nullable: false })
  @Type(() => PermissionCreateWithoutUsersInput)
  create!: PermissionCreateWithoutUsersInput;
}
