import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../../prisma/input/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../../prisma/input/nullable-string-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutRoleNestedInput } from '../../user/input/user-unchecked-update-many-without-role-nested.input';
import { PermissionUncheckedUpdateManyWithoutRolesNestedInput } from '../../permission/input/permission-unchecked-update-many-without-roles-nested.input';

@InputType()
export class RoleUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => UserUncheckedUpdateManyWithoutRoleNestedInput, {nullable:true})
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput;

    @Field(() => PermissionUncheckedUpdateManyWithoutRolesNestedInput, {nullable:true})
    permissions?: PermissionUncheckedUpdateManyWithoutRolesNestedInput;
}
