import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionOperation } from '../../prisma/enum/permission-operation.enum';
import { UserUncheckedCreateNestedManyWithoutPermissionsInput } from '../../user/input/user-unchecked-create-nested-many-without-permissions.input';

@InputType()
export class PermissionUncheckedCreateWithoutRolesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    tableName!: string;

    @Field(() => PermissionOperation, {nullable:false})
    operation!: keyof typeof PermissionOperation;

    @Field(() => UserUncheckedCreateNestedManyWithoutPermissionsInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutPermissionsInput;
}
