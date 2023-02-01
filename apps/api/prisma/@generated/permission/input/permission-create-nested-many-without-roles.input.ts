import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { PermissionCreateOrConnectWithoutRolesInput } from './permission-create-or-connect-without-roles.input';
import { PermissionCreateWithoutRolesInput } from './permission-create-without-roles.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@InputType()
export class PermissionCreateNestedManyWithoutRolesInput {
  @Field(() => [PermissionCreateWithoutRolesInput], { nullable: true })
  @Type(() => PermissionCreateWithoutRolesInput)
  create?: Array<PermissionCreateWithoutRolesInput>;

  @Field(() => [PermissionCreateOrConnectWithoutRolesInput], { nullable: true })
  @Type(() => PermissionCreateOrConnectWithoutRolesInput)
  connectOrCreate?: Array<PermissionCreateOrConnectWithoutRolesInput>;

  @Field(() => [PermissionWhereUniqueInput], { nullable: true })
  @Type(() => PermissionWhereUniqueInput)
  connect?: Array<PermissionWhereUniqueInput>;
}
