import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionOperation } from '../../prisma/enum/permission-operation.enum';
import { RoleUncheckedCreateNestedManyWithoutPermissionsInput } from '../../role/input/role-unchecked-create-nested-many-without-permissions.input';

@InputType()
export class PermissionUncheckedCreateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    tableName!: string;

    @Field(() => PermissionOperation, {nullable:false})
    operation!: keyof typeof PermissionOperation;

    @Field(() => RoleUncheckedCreateNestedManyWithoutPermissionsInput, {nullable:true})
    roles?: RoleUncheckedCreateNestedManyWithoutPermissionsInput;
}
