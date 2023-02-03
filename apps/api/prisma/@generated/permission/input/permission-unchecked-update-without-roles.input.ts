import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionOperation } from '../../prisma/enum/permission-operation.enum';
import { UserUncheckedUpdateManyWithoutPermissionsNestedInput } from '../../user/input/user-unchecked-update-many-without-permissions-nested.input';

@InputType()
export class PermissionUncheckedUpdateWithoutRolesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    tableName?: string;

    @Field(() => PermissionOperation, {nullable:true})
    operation?: keyof typeof PermissionOperation;

    @Field(() => UserUncheckedUpdateManyWithoutPermissionsNestedInput, {nullable:true})
    users?: UserUncheckedUpdateManyWithoutPermissionsNestedInput;
}
