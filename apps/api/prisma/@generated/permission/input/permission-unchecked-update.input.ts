import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionOperation } from '../../prisma/enum/permission-operation.enum';
import { UserUncheckedUpdateManyWithoutPermissionsNestedInput } from '../../user/input/user-unchecked-update-many-without-permissions-nested.input';
import { RoleUncheckedUpdateManyWithoutPermissionsNestedInput } from '../../role/input/role-unchecked-update-many-without-permissions-nested.input';

@InputType()
export class PermissionUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:true})
    tableName?: string;

    @Field(() => PermissionOperation, {nullable:true})
    operation?: keyof typeof PermissionOperation;

    @Field(() => UserUncheckedUpdateManyWithoutPermissionsNestedInput, {nullable:true})
    users?: UserUncheckedUpdateManyWithoutPermissionsNestedInput;

    @Field(() => RoleUncheckedUpdateManyWithoutPermissionsNestedInput, {nullable:true})
    roles?: RoleUncheckedUpdateManyWithoutPermissionsNestedInput;
}
