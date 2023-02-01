import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { PermissionUpdateWithoutRolesInput } from './permission-update-without-roles.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@InputType()
export class PermissionUpdateWithWhereUniqueWithoutRolesInput {
  @Field(() => PermissionWhereUniqueInput, { nullable: false })
  @Type(() => PermissionWhereUniqueInput)
  where!: PermissionWhereUniqueInput;

  @Field(() => PermissionUpdateWithoutRolesInput, { nullable: false })
  @Type(() => PermissionUpdateWithoutRolesInput)
  data!: PermissionUpdateWithoutRolesInput;
}
