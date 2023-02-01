import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { PermissionCreateOrConnectWithoutUsersInput } from './permission-create-or-connect-without-users.input';
import { PermissionCreateWithoutUsersInput } from './permission-create-without-users.input';
import { PermissionScalarWhereInput } from './permission-scalar-where.input';
import { PermissionUpdateManyWithWhereWithoutUsersInput } from './permission-update-many-with-where-without-users.input';
import { PermissionUpdateWithWhereUniqueWithoutUsersInput } from './permission-update-with-where-unique-without-users.input';
import { PermissionUpsertWithWhereUniqueWithoutUsersInput } from './permission-upsert-with-where-unique-without-users.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@InputType()
export class PermissionUpdateManyWithoutUsersNestedInput {
  @Field(() => [PermissionCreateWithoutUsersInput], { nullable: true })
  @Type(() => PermissionCreateWithoutUsersInput)
  create?: Array<PermissionCreateWithoutUsersInput>;

  @Field(() => [PermissionCreateOrConnectWithoutUsersInput], { nullable: true })
  @Type(() => PermissionCreateOrConnectWithoutUsersInput)
  connectOrCreate?: Array<PermissionCreateOrConnectWithoutUsersInput>;

  @Field(() => [PermissionUpsertWithWhereUniqueWithoutUsersInput], { nullable: true })
  @Type(() => PermissionUpsertWithWhereUniqueWithoutUsersInput)
  upsert?: Array<PermissionUpsertWithWhereUniqueWithoutUsersInput>;

  @Field(() => [PermissionWhereUniqueInput], { nullable: true })
  @Type(() => PermissionWhereUniqueInput)
  set?: Array<PermissionWhereUniqueInput>;

  @Field(() => [PermissionWhereUniqueInput], { nullable: true })
  @Type(() => PermissionWhereUniqueInput)
  disconnect?: Array<PermissionWhereUniqueInput>;

  @Field(() => [PermissionWhereUniqueInput], { nullable: true })
  @Type(() => PermissionWhereUniqueInput)
  delete?: Array<PermissionWhereUniqueInput>;

  @Field(() => [PermissionWhereUniqueInput], { nullable: true })
  @Type(() => PermissionWhereUniqueInput)
  connect?: Array<PermissionWhereUniqueInput>;

  @Field(() => [PermissionUpdateWithWhereUniqueWithoutUsersInput], { nullable: true })
  @Type(() => PermissionUpdateWithWhereUniqueWithoutUsersInput)
  update?: Array<PermissionUpdateWithWhereUniqueWithoutUsersInput>;

  @Field(() => [PermissionUpdateManyWithWhereWithoutUsersInput], { nullable: true })
  @Type(() => PermissionUpdateManyWithWhereWithoutUsersInput)
  updateMany?: Array<PermissionUpdateManyWithWhereWithoutUsersInput>;

  @Field(() => [PermissionScalarWhereInput], { nullable: true })
  @Type(() => PermissionScalarWhereInput)
  deleteMany?: Array<PermissionScalarWhereInput>;
}
