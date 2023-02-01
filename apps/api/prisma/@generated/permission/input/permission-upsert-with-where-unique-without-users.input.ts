import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { PermissionCreateWithoutUsersInput } from './permission-create-without-users.input';
import { PermissionUpdateWithoutUsersInput } from './permission-update-without-users.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@InputType()
export class PermissionUpsertWithWhereUniqueWithoutUsersInput {
  @Field(() => PermissionWhereUniqueInput, { nullable: false })
  @Type(() => PermissionWhereUniqueInput)
  where!: PermissionWhereUniqueInput;

  @Field(() => PermissionUpdateWithoutUsersInput, { nullable: false })
  @Type(() => PermissionUpdateWithoutUsersInput)
  update!: PermissionUpdateWithoutUsersInput;

  @Field(() => PermissionCreateWithoutUsersInput, { nullable: false })
  @Type(() => PermissionCreateWithoutUsersInput)
  create!: PermissionCreateWithoutUsersInput;
}
