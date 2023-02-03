import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../../user/model/user.model';
import { Permission } from '../../permission/model/permission.model';
import { RoleCount } from '../output/role-count.output';

@ObjectType()
export class Role {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => [Permission], {nullable:true})
    permissions?: Array<Permission>;

    @Field(() => RoleCount, {nullable:false})
    _count?: RoleCount;
}
