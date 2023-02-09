import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutUsersInput } from '../../role/input/role-create-nested-one-without-users.input';
import { PermissionCreateNestedManyWithoutUsersInput } from '../../permission/input/permission-create-nested-many-without-users.input';

@InputType()
export class UserCreateInput {

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

    @Field(() => RoleCreateNestedOneWithoutUsersInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutUsersInput;

    @Field(() => PermissionCreateNestedManyWithoutUsersInput, {nullable:true})
    permissions?: PermissionCreateNestedManyWithoutUsersInput;
}
