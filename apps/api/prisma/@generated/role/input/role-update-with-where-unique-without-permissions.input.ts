import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { Type } from 'class-transformer';
import { RoleUpdateWithoutPermissionsInput } from './role-update-without-permissions.input';

@InputType()
export class RoleUpdateWithWhereUniqueWithoutPermissionsInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: RoleWhereUniqueInput;

    @Field(() => RoleUpdateWithoutPermissionsInput, {nullable:false})
    @Type(() => RoleUpdateWithoutPermissionsInput)
    data!: RoleUpdateWithoutPermissionsInput;
}
