import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionOperation } from '../../prisma/enum/permission-operation.enum';
import { RoleUpdateManyWithoutPermissionsNestedInput } from '../../role/input/role-update-many-without-permissions-nested.input';

@InputType()
export class PermissionUpdateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    tableName?: string;

    @Field(() => PermissionOperation, {nullable:true})
    operation?: keyof typeof PermissionOperation;

    @Field(() => RoleUpdateManyWithoutPermissionsNestedInput, {nullable:true})
    roles?: RoleUpdateManyWithoutPermissionsNestedInput;
}
