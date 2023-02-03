import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { Role } from '../../role/model/role.model';
import { Permission } from '../../permission/model/permission.model';
import { UserCount } from '../output/user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @HideField()
    password!: string;

    @Field(() => Date, {nullable:true})
    emailConfirmedAt!: Date | null;

    @Field(() => String, {nullable:false})
    confirmationCode!: string;

    @Field(() => Role, {nullable:false})
    role?: Role;

    @Field(() => String, {nullable:false})
    roleId!: string;

    @Field(() => [Permission], {nullable:true})
    permissions?: Array<Permission>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
