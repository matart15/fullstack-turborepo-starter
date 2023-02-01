import { Field, InputType } from '@nestjs/graphql';

import { DateTimeFieldUpdateOperationsInput } from '../../prisma/input/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../../prisma/input/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../../prisma/input/nullable-string-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../prisma/input/string-field-update-operations.input';
import { RoleUpdateOneRequiredWithoutUsersNestedInput } from '../../role/input/role-update-one-required-without-users-nested.input';

@InputType()
export class UserUpdateWithoutPermissionsInput {
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

  @Field(() => RoleUpdateOneRequiredWithoutUsersNestedInput, { nullable: true })
  role?: RoleUpdateOneRequiredWithoutUsersNestedInput;
}
