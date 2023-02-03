import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionOperation } from '../enum/permission-operation.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPermissionOperationFilter } from './nested-enum-permission-operation-filter.input';

@InputType()
export class NestedEnumPermissionOperationWithAggregatesFilter {

    @Field(() => PermissionOperation, {nullable:true})
    equals?: keyof typeof PermissionOperation;

    @Field(() => [PermissionOperation], {nullable:true})
    in?: Array<keyof typeof PermissionOperation>;

    @Field(() => [PermissionOperation], {nullable:true})
    notIn?: Array<keyof typeof PermissionOperation>;

    @Field(() => NestedEnumPermissionOperationWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPermissionOperationWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPermissionOperationFilter, {nullable:true})
    _min?: NestedEnumPermissionOperationFilter;

    @Field(() => NestedEnumPermissionOperationFilter, {nullable:true})
    _max?: NestedEnumPermissionOperationFilter;
}
