import { Field, InputType } from '@nestjs/graphql';

import { PermissionUpdateManyWithoutUsersNestedInput } from '../../permission/input/permission-update-many-without-users-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../../prisma/input/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../../prisma/input/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../../prisma/input/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../prisma/input/string-field-update-operations.input';

@InputType()
export class UserUpdateWithoutRoleInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: StringFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  emailConfirmedAt?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  confirmationCode?: StringFieldUpdateOperationsInput;

  @Field(() => PermissionUpdateManyWithoutUsersNestedInput, { nullable: true })
  permissions?: PermissionUpdateManyWithoutUsersNestedInput;
}
