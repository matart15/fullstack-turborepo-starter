import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionOperation } from '../../prisma/enum/permission-operation.enum';
import { UserUpdateManyWithoutPermissionsNestedInput } from '../../user/input/user-update-many-without-permissions-nested.input';

@InputType()
export class PermissionUpdateWithoutRolesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:true})
    tableName?: string;

    @Field(() => PermissionOperation, {nullable:true})
    operation?: keyof typeof PermissionOperation;

    @Field(() => UserUpdateManyWithoutPermissionsNestedInput, {nullable:true})
    users?: UserUpdateManyWithoutPermissionsNestedInput;
}
