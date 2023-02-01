import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { PermissionCreateWithoutRolesInput } from './permission-create-without-roles.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@InputType()
export class PermissionCreateOrConnectWithoutRolesInput {
  @Field(() => PermissionWhereUniqueInput, { nullable: false })
  @Type(() => PermissionWhereUniqueInput)
  where!: PermissionWhereUniqueInput;

  @Field(() => PermissionCreateWithoutRolesInput, { nullable: false })
  @Type(() => PermissionCreateWithoutRolesInput)
  create!: PermissionCreateWithoutRolesInput;
}
