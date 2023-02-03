import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutPermissionsInput } from './user-update-without-permissions.input';
import { UserCreateWithoutPermissionsInput } from './user-create-without-permissions.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutPermissionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutPermissionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutPermissionsInput)
    update!: UserUpdateWithoutPermissionsInput;

    @Field(() => UserCreateWithoutPermissionsInput, {nullable:false})
    @Type(() => UserCreateWithoutPermissionsInput)
    create!: UserCreateWithoutPermissionsInput;
}
