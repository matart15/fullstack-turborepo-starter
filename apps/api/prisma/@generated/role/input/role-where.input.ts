import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../../prisma/input/string-filter.input';
import { StringNullableFilter } from '../../prisma/input/string-nullable-filter.input';
import { UserListRelationFilter } from '../../user/input/user-list-relation-filter.input';
import { PermissionListRelationFilter } from '../../permission/input/permission-list-relation-filter.input';

@InputType()
export class RoleWhereInput {

    @Field(() => [RoleWhereInput], {nullable:true})
    AND?: Array<RoleWhereInput>;

    @Field(() => [RoleWhereInput], {nullable:true})
    OR?: Array<RoleWhereInput>;

    @Field(() => [RoleWhereInput], {nullable:true})
    NOT?: Array<RoleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;

    @Field(() => PermissionListRelationFilter, {nullable:true})
    permissions?: PermissionListRelationFilter;
}
