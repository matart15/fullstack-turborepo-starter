import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPermissionsInput } from './user-create-without-permissions.input';

@InputType()
export class UserCreateOrConnectWithoutPermissionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutPermissionsInput, {nullable:false})
    @Type(() => UserCreateWithoutPermissionsInput)
    create!: UserCreateWithoutPermissionsInput;
}
