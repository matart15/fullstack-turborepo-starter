import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../../prisma/input/string-field-update-operations.input';
import { EnumPermissionOperationFieldUpdateOperationsInput } from '../../prisma/input/enum-permission-operation-field-update-operations.input';
import { RoleUncheckedUpdateManyWithoutPermissionsNestedInput } from '../../role/input/role-unchecked-update-many-without-permissions-nested.input';

@InputType()
export class PermissionUncheckedUpdateWithoutUsersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    tableName?: StringFieldUpdateOperationsInput;

    @Field(() => EnumPermissionOperationFieldUpdateOperationsInput, {nullable:true})
    operation?: EnumPermissionOperationFieldUpdateOperationsInput;

    @Field(() => RoleUncheckedUpdateManyWithoutPermissionsNestedInput, {nullable:true})
    roles?: RoleUncheckedUpdateManyWithoutPermissionsNestedInput;
}
