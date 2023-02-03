import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutPermissionsInput } from './role-create-without-permissions.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutPermissionsInput } from './role-create-or-connect-without-permissions.input';
import { RoleUpsertWithWhereUniqueWithoutPermissionsInput } from './role-upsert-with-where-unique-without-permissions.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateWithWhereUniqueWithoutPermissionsInput } from './role-update-with-where-unique-without-permissions.input';
import { RoleUpdateManyWithWhereWithoutPermissionsInput } from './role-update-many-with-where-without-permissions.input';
import { RoleScalarWhereInput } from './role-scalar-where.input';

@InputType()
export class RoleUpdateManyWithoutPermissionsNestedInput {

    @Field(() => [RoleCreateWithoutPermissionsInput], {nullable:true})
    @Type(() => RoleCreateWithoutPermissionsInput)
    create?: Array<RoleCreateWithoutPermissionsInput>;

    @Field(() => [RoleCreateOrConnectWithoutPermissionsInput], {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutPermissionsInput)
    connectOrCreate?: Array<RoleCreateOrConnectWithoutPermissionsInput>;

    @Field(() => [RoleUpsertWithWhereUniqueWithoutPermissionsInput], {nullable:true})
    @Type(() => RoleUpsertWithWhereUniqueWithoutPermissionsInput)
    upsert?: Array<RoleUpsertWithWhereUniqueWithoutPermissionsInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    set?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    disconnect?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    delete?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleWhereUniqueInput], {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: Array<RoleWhereUniqueInput>;

    @Field(() => [RoleUpdateWithWhereUniqueWithoutPermissionsInput], {nullable:true})
    @Type(() => RoleUpdateWithWhereUniqueWithoutPermissionsInput)
    update?: Array<RoleUpdateWithWhereUniqueWithoutPermissionsInput>;

    @Field(() => [RoleUpdateManyWithWhereWithoutPermissionsInput], {nullable:true})
    @Type(() => RoleUpdateManyWithWhereWithoutPermissionsInput)
    updateMany?: Array<RoleUpdateManyWithWhereWithoutPermissionsInput>;

    @Field(() => [RoleScalarWhereInput], {nullable:true})
    @Type(() => RoleScalarWhereInput)
    deleteMany?: Array<RoleScalarWhereInput>;
}
