import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { RoleCreateWithoutPermissionsInput } from './role-create-without-permissions.input';
import { RoleUpdateWithoutPermissionsInput } from './role-update-without-permissions.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleUpsertWithWhereUniqueWithoutPermissionsInput {
  @Field(() => RoleWhereUniqueInput, { nullable: false })
  @Type(() => RoleWhereUniqueInput)
  where!: RoleWhereUniqueInput;

  @Field(() => RoleUpdateWithoutPermissionsInput, { nullable: false })
  @Type(() => RoleUpdateWithoutPermissionsInput)
  update!: RoleUpdateWithoutPermissionsInput;

  @Field(() => RoleCreateWithoutPermissionsInput, { nullable: false })
  @Type(() => RoleCreateWithoutPermissionsInput)
  create!: RoleCreateWithoutPermissionsInput;
}
