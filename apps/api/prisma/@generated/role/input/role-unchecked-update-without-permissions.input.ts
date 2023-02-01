import { Field, InputType } from '@nestjs/graphql';

import { NullableStringFieldUpdateOperationsInput } from '../../prisma/input/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../prisma/input/string-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutRoleNestedInput } from '../../user/input/user-unchecked-update-many-without-role-nested.input';

@InputType()
export class RoleUncheckedUpdateWithoutPermissionsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: NullableStringFieldUpdateOperationsInput;

  @Field(() => UserUncheckedUpdateManyWithoutRoleNestedInput, { nullable: true })
  users?: UserUncheckedUpdateManyWithoutRoleNestedInput;
}
