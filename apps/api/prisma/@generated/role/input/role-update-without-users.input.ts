import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionUpdateManyWithoutRolesNestedInput } from '../../permission/input/permission-update-many-without-roles-nested.input';

@InputType()
export class RoleUpdateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => PermissionUpdateManyWithoutRolesNestedInput, {nullable:true})
    permissions?: PermissionUpdateManyWithoutRolesNestedInput;
}
