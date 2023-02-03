import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    email = "email",
    name = "name",
    password = "password",
    emailConfirmedAt = "emailConfirmedAt",
    confirmationCode = "confirmationCode",
    roleId = "roleId"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
