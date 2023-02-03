import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutRoleInput } from '../../user/input/user-create-nested-many-without-role.input';

@InputType()
export class RoleCreateWithoutPermissionsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => UserCreateNestedManyWithoutRoleInput, {nullable:true})
    users?: UserCreateNestedManyWithoutRoleInput;
}
