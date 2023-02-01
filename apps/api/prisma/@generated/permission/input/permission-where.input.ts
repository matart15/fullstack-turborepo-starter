import { Field, InputType } from '@nestjs/graphql';

import { EnumPermissionOperationFilter } from '../../prisma/input/enum-permission-operation-filter.input';
import { StringFilter } from '../../prisma/input/string-filter.input';
import { RoleListRelationFilter } from '../../role/input/role-list-relation-filter.input';
import { UserListRelationFilter } from '../../user/input/user-list-relation-filter.input';

@InputType()
export class PermissionWhereInput {
  @Field(() => [PermissionWhereInput], { nullable: true })
  AND?: Array<PermissionWhereInput>;

  @Field(() => [PermissionWhereInput], { nullable: true })
  OR?: Array<PermissionWhereInput>;

  @Field(() => [PermissionWhereInput], { nullable: true })
  NOT?: Array<PermissionWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  tableName?: StringFilter;

  @Field(() => EnumPermissionOperationFilter, { nullable: true })
  operation?: EnumPermissionOperationFilter;

  @Field(() => UserListRelationFilter, { nullable: true })
  users?: UserListRelationFilter;

  @Field(() => RoleListRelationFilter, { nullable: true })
  roles?: RoleListRelationFilter;
}
