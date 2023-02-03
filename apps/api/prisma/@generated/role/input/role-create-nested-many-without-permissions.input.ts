import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutPermissionsInput } from './role-create-without-permissions.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutPermissionsInput } from './role-create-or-connect-without-permissions.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleCreateNestedManyWithoutPermissionsInput {

    @Field(() => [RoleCreateWithoutPermissionsInput], {nullable:true})
    @Type(() => RoleCreateWithoutPermissionsInput)
    create?: Array<RoleCreateWithoutPermissionsInput>;

    @Field(() => [RoleCreateOrConnectWithoutPermissionsInput], {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutPermissionsInput)
    connectOrCreate?: Array<RoleCreateOrConnectWithoutPermissionsInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Array<RoleWhereUniqueInput>;
}
