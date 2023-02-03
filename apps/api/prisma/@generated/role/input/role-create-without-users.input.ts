import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateNestedManyWithoutRolesInput } from '../../permission/input/permission-create-nested-many-without-roles.input';

@InputType()
export class RoleCreateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => PermissionCreateNestedManyWithoutRolesInput, {nullable:true})
    permissions?: PermissionCreateNestedManyWithoutRolesInput;
}
