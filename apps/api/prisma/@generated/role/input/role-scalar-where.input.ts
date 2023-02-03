import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../../prisma/input/string-filter.input';
import { StringNullableFilter } from '../../prisma/input/string-nullable-filter.input';

@InputType()
export class RoleScalarWhereInput {

    @Field(() => [RoleScalarWhereInput], {nullable:true})
    AND?: Array<RoleScalarWhereInput>;

    @Field(() => [RoleScalarWhereInput], {nullable:true})
    OR?: Array<RoleScalarWhereInput>;

    @Field(() => [RoleScalarWhereInput], {nullable:true})
    NOT?: Array<RoleScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;
}
