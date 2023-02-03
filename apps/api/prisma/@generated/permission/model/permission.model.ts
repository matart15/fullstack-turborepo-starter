import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PermissionOperation } from '../../prisma/enum/permission-operation.enum';
import { User } from '../../user/model/user.model';
import { Role } from '../../role/model/role.model';
import { PermissionCount } from '../output/permission-count.output';

@ObjectType()
export class Permission {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    tableName!: string;

    @Field(() => PermissionOperation, {nullable:false})
    operation!: keyof typeof PermissionOperation;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => [Role], {nullable:true})
    roles?: Array<Role>;

    @Field(() => PermissionCount, {nullable:false})
    _count?: PermissionCount;
}
