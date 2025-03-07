import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionOperation } from '../../prisma/enum/permission-operation.enum';
import { RoleUncheckedUpdateManyWithoutPermissionsNestedInput } from '../../role/input/role-unchecked-update-many-without-permissions-nested.input';

@InputType()
export class PermissionUncheckedUpdateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:true})
    tableName?: string;

    @Field(() => PermissionOperation, {nullable:true})
    operation?: keyof typeof PermissionOperation;

    @Field(() => RoleUncheckedUpdateManyWithoutPermissionsNestedInput, {nullable:true})
    roles?: RoleUncheckedUpdateManyWithoutPermissionsNestedInput;
}
