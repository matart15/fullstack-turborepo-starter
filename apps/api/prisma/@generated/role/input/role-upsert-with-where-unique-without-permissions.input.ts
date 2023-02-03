import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { Type } from 'class-transformer';
import { RoleUpdateWithoutPermissionsInput } from './role-update-without-permissions.input';
import { RoleCreateWithoutPermissionsInput } from './role-create-without-permissions.input';

@InputType()
export class RoleUpsertWithWhereUniqueWithoutPermissionsInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: RoleWhereUniqueInput;

    @Field(() => RoleUpdateWithoutPermissionsInput, {nullable:false})
    @Type(() => RoleUpdateWithoutPermissionsInput)
    update!: RoleUpdateWithoutPermissionsInput;

    @Field(() => RoleCreateWithoutPermissionsInput, {nullable:false})
    @Type(() => RoleCreateWithoutPermissionsInput)
    create!: RoleCreateWithoutPermissionsInput;
}
