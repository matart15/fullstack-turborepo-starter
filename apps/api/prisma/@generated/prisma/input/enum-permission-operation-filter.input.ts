import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionOperation } from '../enum/permission-operation.enum';
import { NestedEnumPermissionOperationFilter } from './nested-enum-permission-operation-filter.input';

@InputType()
export class EnumPermissionOperationFilter {

    @Field(() => PermissionOperation, {nullable:true})
    equals?: keyof typeof PermissionOperation;

    @Field(() => [PermissionOperation], {nullable:true})
    in?: Array<keyof typeof PermissionOperation>;

    @Field(() => [PermissionOperation], {nullable:true})
    notIn?: Array<keyof typeof PermissionOperation>;

    @Field(() => NestedEnumPermissionOperationFilter, {nullable:true})
    not?: NestedEnumPermissionOperationFilter;
}
