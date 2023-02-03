import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionUpdateWithoutRolesInput } from './permission-update-without-roles.input';

@InputType()
export class PermissionUpdateWithWhereUniqueWithoutRolesInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    @Type(() => PermissionWhereUniqueInput)
    where!: PermissionWhereUniqueInput;

    @Field(() => PermissionUpdateWithoutRolesInput, {nullable:false})
    @Type(() => PermissionUpdateWithoutRolesInput)
    data!: PermissionUpdateWithoutRolesInput;
}
