import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutRoleInput } from '../../user/input/user-unchecked-create-nested-many-without-role.input';
import { PermissionUncheckedCreateNestedManyWithoutRolesInput } from '../../permission/input/permission-unchecked-create-nested-many-without-roles.input';

@InputType()
export class RoleUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => UserUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutRoleInput;

    @Field(() => PermissionUncheckedCreateNestedManyWithoutRolesInput, {nullable:true})
    permissions?: PermissionUncheckedCreateNestedManyWithoutRolesInput;
}
