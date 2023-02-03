import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../../prisma/input/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../../prisma/input/date-time-nullable-with-aggregates-filter.input';
import { EnumPermissionOperationWithAggregatesFilter } from '../../prisma/input/enum-permission-operation-with-aggregates-filter.input';

@InputType()
export class PermissionScalarWhereWithAggregatesInput {

    @Field(() => [PermissionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PermissionScalarWhereWithAggregatesInput>;

    @Field(() => [PermissionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PermissionScalarWhereWithAggregatesInput>;

    @Field(() => [PermissionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PermissionScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    deletedAt?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    tableName?: StringWithAggregatesFilter;

    @Field(() => EnumPermissionOperationWithAggregatesFilter, {nullable:true})
    operation?: EnumPermissionOperationWithAggregatesFilter;
}
