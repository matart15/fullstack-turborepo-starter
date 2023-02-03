import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutUsersInput } from './permission-create-without-users.input';
import { Type } from 'class-transformer';
import { PermissionCreateOrConnectWithoutUsersInput } from './permission-create-or-connect-without-users.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@InputType()
export class PermissionUncheckedCreateNestedManyWithoutUsersInput {

    @Field(() => [PermissionCreateWithoutUsersInput], {nullable:true})
    @Type(() => PermissionCreateWithoutUsersInput)
    create?: Array<PermissionCreateWithoutUsersInput>;

    @Field(() => [PermissionCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => PermissionCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<PermissionCreateOrConnectWithoutUsersInput>;

    @Field(() => [PermissionWhereUniqueInput], {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    connect?: Array<PermissionWhereUniqueInput>;
}
