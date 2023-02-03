import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../../prisma/input/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../../prisma/input/nullable-string-field-update-operations.input';
import { PermissionUpdateManyWithoutRolesNestedInput } from '../../permission/input/permission-update-many-without-roles-nested.input';

@InputType()
export class RoleUpdateWithoutUsersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => PermissionUpdateManyWithoutRolesNestedInput, {nullable:true})
    permissions?: PermissionUpdateManyWithoutRolesNestedInput;
}
