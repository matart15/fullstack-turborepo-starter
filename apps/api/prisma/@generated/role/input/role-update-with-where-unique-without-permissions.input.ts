import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { RoleUpdateWithoutPermissionsInput } from './role-update-without-permissions.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleUpdateWithWhereUniqueWithoutPermissionsInput {
  @Field(() => RoleWhereUniqueInput, { nullable: false })
  @Type(() => RoleWhereUniqueInput)
  where!: RoleWhereUniqueInput;

  @Field(() => RoleUpdateWithoutPermissionsInput, { nullable: false })
  @Type(() => RoleUpdateWithoutPermissionsInput)
  data!: RoleUpdateWithoutPermissionsInput;
}
