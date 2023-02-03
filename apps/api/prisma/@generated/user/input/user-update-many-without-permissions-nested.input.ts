import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutPermissionsInput } from './user-create-without-permissions.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutPermissionsInput } from './user-create-or-connect-without-permissions.input';
import { UserUpsertWithWhereUniqueWithoutPermissionsInput } from './user-upsert-with-where-unique-without-permissions.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutPermissionsInput } from './user-update-with-where-unique-without-permissions.input';
import { UserUpdateManyWithWhereWithoutPermissionsInput } from './user-update-many-with-where-without-permissions.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutPermissionsNestedInput {

    @Field(() => [UserCreateWithoutPermissionsInput], {nullable:true})
    @Type(() => UserCreateWithoutPermissionsInput)
    create?: Array<UserCreateWithoutPermissionsInput>;

    @Field(() => [UserCreateOrConnectWithoutPermissionsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPermissionsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutPermissionsInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutPermissionsInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutPermissionsInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutPermissionsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutPermissionsInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutPermissionsInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutPermissionsInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutPermissionsInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutPermissionsInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutPermissionsInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
