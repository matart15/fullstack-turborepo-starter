import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { PermissionUncheckedCreateNestedManyWithoutUsersInput } from '../../permission/input/permission-unchecked-create-nested-many-without-users.input';

@InputType()
export class UserUncheckedCreateWithoutRoleInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @HideField()
    password!: string;

    @HideField()
    emailConfirmedAt?: Date | string;

    @HideField()
    confirmationCode!: string;

    @Field(() => PermissionUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    permissions?: PermissionUncheckedCreateNestedManyWithoutUsersInput;
}
