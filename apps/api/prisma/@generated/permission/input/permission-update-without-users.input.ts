import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../../prisma/input/string-field-update-operations.input';
import { EnumPermissionOperationFieldUpdateOperationsInput } from '../../prisma/input/enum-permission-operation-field-update-operations.input';
import { RoleUpdateManyWithoutPermissionsNestedInput } from '../../role/input/role-update-many-without-permissions-nested.input';

@InputType()
export class PermissionUpdateWithoutUsersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    tableName?: StringFieldUpdateOperationsInput;

    @Field(() => EnumPermissionOperationFieldUpdateOperationsInput, {nullable:true})
    operation?: EnumPermissionOperationFieldUpdateOperationsInput;

    @Field(() => RoleUpdateManyWithoutPermissionsNestedInput, {nullable:true})
    roles?: RoleUpdateManyWithoutPermissionsNestedInput;
}
