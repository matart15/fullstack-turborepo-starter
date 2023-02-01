import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { PermissionCreateWithoutRolesInput } from './permission-create-without-roles.input';
import { PermissionUpdateWithoutRolesInput } from './permission-update-without-roles.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@InputType()
export class PermissionUpsertWithWhereUniqueWithoutRolesInput {
  @Field(() => PermissionWhereUniqueInput, { nullable: false })
  @Type(() => PermissionWhereUniqueInput)
  where!: PermissionWhereUniqueInput;

  @Field(() => PermissionUpdateWithoutRolesInput, { nullable: false })
  @Type(() => PermissionUpdateWithoutRolesInput)
  update!: PermissionUpdateWithoutRolesInput;

  @Field(() => PermissionCreateWithoutRolesInput, { nullable: false })
  @Type(() => PermissionCreateWithoutRolesInput)
  create!: PermissionCreateWithoutRolesInput;
}
