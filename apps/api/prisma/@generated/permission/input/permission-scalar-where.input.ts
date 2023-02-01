import { Field, InputType } from '@nestjs/graphql';

import { EnumPermissionOperationFilter } from '../../prisma/input/enum-permission-operation-filter.input';
import { StringFilter } from '../../prisma/input/string-filter.input';

@InputType()
export class PermissionScalarWhereInput {
  @Field(() => [PermissionScalarWhereInput], { nullable: true })
  AND?: Array<PermissionScalarWhereInput>;

  @Field(() => [PermissionScalarWhereInput], { nullable: true })
  OR?: Array<PermissionScalarWhereInput>;

  @Field(() => [PermissionScalarWhereInput], { nullable: true })
  NOT?: Array<PermissionScalarWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  tableName?: StringFilter;

  @Field(() => EnumPermissionOperationFilter, { nullable: true })
  operation?: EnumPermissionOperationFilter;
}
