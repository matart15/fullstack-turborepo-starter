import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionUncheckedUpdateManyWithoutRolesNestedInput } from '../../permission/input/permission-unchecked-update-many-without-roles-nested.input';

@InputType()
export class RoleUncheckedUpdateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => PermissionUncheckedUpdateManyWithoutRolesNestedInput, {nullable:true})
    permissions?: PermissionUncheckedUpdateManyWithoutRolesNestedInput;
}
