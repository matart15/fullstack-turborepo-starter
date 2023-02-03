import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionUpdateWithoutUsersInput } from './permission-update-without-users.input';

@InputType()
export class PermissionUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    @Type(() => PermissionWhereUniqueInput)
    where!: PermissionWhereUniqueInput;

    @Field(() => PermissionUpdateWithoutUsersInput, {nullable:false})
    @Type(() => PermissionUpdateWithoutUsersInput)
    data!: PermissionUpdateWithoutUsersInput;
}
