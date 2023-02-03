import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateOneRequiredWithoutUsersNestedInput } from '../../role/input/role-update-one-required-without-users-nested.input';
import { PermissionUpdateManyWithoutUsersNestedInput } from '../../permission/input/permission-update-many-without-users-nested.input';

@InputType()
export class UserUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Date, {nullable:true})
    emailConfirmedAt?: Date | string;

    @Field(() => String, {nullable:true})
    confirmationCode?: string;

    @Field(() => RoleUpdateOneRequiredWithoutUsersNestedInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput;

    @Field(() => PermissionUpdateManyWithoutUsersNestedInput, {nullable:true})
    permissions?: PermissionUpdateManyWithoutUsersNestedInput;
}
