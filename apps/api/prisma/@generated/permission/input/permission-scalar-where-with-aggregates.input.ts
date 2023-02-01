import { Field, InputType } from '@nestjs/graphql';

import { EnumPermissionOperationWithAggregatesFilter } from '../../prisma/input/enum-permission-operation-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../../prisma/input/string-with-aggregates-filter.input';

@InputType()
export class PermissionScalarWhereWithAggregatesInput {
  @Field(() => [PermissionScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<PermissionScalarWhereWithAggregatesInput>;

  @Field(() => [PermissionScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<PermissionScalarWhereWithAggregatesInput>;

  @Field(() => [PermissionScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<PermissionScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  tableName?: StringWithAggregatesFilter;

  @Field(() => EnumPermissionOperationWithAggregatesFilter, { nullable: true })
  operation?: EnumPermissionOperationWithAggregatesFilter;
}
