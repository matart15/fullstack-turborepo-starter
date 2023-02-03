import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutPermissionsInput } from './user-update-without-permissions.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutPermissionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutPermissionsInput, {nullable:false})
    @Type(() => UserUpdateWithoutPermissionsInput)
    data!: UserUpdateWithoutPermissionsInput;
}
