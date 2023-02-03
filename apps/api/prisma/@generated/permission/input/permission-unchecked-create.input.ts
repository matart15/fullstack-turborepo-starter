import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionOperation } from '../../prisma/enum/permission-operation.enum';
import { UserUncheckedCreateNestedManyWithoutPermissionsInput } from '../../user/input/user-unchecked-create-nested-many-without-permissions.input';
import { RoleUncheckedCreateNestedManyWithoutPermissionsInput } from '../../role/input/role-unchecked-create-nested-many-without-permissions.input';

@InputType()
export class PermissionUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    tableName!: string;

    @Field(() => PermissionOperation, {nullable:false})
    operation!: keyof typeof PermissionOperation;

    @Field(() => UserUncheckedCreateNestedManyWithoutPermissionsInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutPermissionsInput;

    @Field(() => RoleUncheckedCreateNestedManyWithoutPermissionsInput, {nullable:true})
    roles?: RoleUncheckedCreateNestedManyWithoutPermissionsInput;
}
