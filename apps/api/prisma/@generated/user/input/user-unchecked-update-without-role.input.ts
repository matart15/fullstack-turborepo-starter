import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { PermissionUncheckedUpdateManyWithoutUsersNestedInput } from '../../permission/input/permission-unchecked-update-many-without-users-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutRoleInput {

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

    @HideField()
    password?: string;

    @HideField()
    emailConfirmedAt?: Date | string;

    @HideField()
    confirmationCode?: string;

    @Field(() => PermissionUncheckedUpdateManyWithoutUsersNestedInput, {nullable:true})
    permissions?: PermissionUncheckedUpdateManyWithoutUsersNestedInput;
}
