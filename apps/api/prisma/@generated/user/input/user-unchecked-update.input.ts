import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionUncheckedUpdateManyWithoutUsersNestedInput } from '../../permission/input/permission-unchecked-update-many-without-users-nested.input';

@InputType()
export class UserUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

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

    @Field(() => String, {nullable:true})
    roleId?: string;

    @Field(() => PermissionUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    permissions?: PermissionUncheckedUpdateManyWithoutUsersNestedInput;
}
