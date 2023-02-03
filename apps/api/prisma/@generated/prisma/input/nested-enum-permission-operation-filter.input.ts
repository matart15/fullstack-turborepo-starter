import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionOperation } from '../enum/permission-operation.enum';

@InputType()
export class NestedEnumPermissionOperationFilter {

    @Field(() => PermissionOperation, {nullable:true})
    equals?: keyof typeof PermissionOperation;

    @Field(() => [PermissionOperation], {nullable:true})
    in?: Array<keyof typeof PermissionOperation>;

    @Field(() => [PermissionOperation], {nullable:true})
    notIn?: Array<keyof typeof PermissionOperation>;

    @Field(() => NestedEnumPermissionOperationFilter, {nullable:true})
    not?: NestedEnumPermissionOperationFilter;
}
