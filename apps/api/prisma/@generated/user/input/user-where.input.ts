import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../../prisma/input/string-filter.input';
import { DateTimeFilter } from '../../prisma/input/date-time-filter.input';
import { DateTimeNullableFilter } from '../../prisma/input/date-time-nullable-filter.input';
import { StringNullableFilter } from '../../prisma/input/string-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { RoleWhereInput } from '../../role/input/role-where.input';
import { PermissionListRelationFilter } from '../../permission/input/permission-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @HideField()
    password?: StringFilter;

    @HideField()
    emailConfirmedAt?: DateTimeNullableFilter;

    @HideField()
    confirmationCode?: StringFilter;

    @Field(() => RoleWhereInput, {nullable:true})
    role?: RoleWhereInput;

    @Field(() => StringFilter, {nullable:true})
    roleId?: StringFilter;

    @Field(() => PermissionListRelationFilter, {nullable:true})
    permissions?: PermissionListRelationFilter;
}
