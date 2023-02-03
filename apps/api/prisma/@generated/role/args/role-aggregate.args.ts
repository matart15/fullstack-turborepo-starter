import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleWhereInput } from '../input/role-where.input';
import { Type } from 'class-transformer';
import { RoleOrderByWithRelationInput } from '../input/role-order-by-with-relation.input';
import { RoleWhereUniqueInput } from '../input/role-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RoleCountAggregateInput } from '../input/role-count-aggregate.input';
import { RoleMinAggregateInput } from '../input/role-min-aggregate.input';
import { RoleMaxAggregateInput } from '../input/role-max-aggregate.input';

@ArgsType()
export class RoleAggregateArgs {

    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: RoleWhereInput;

    @Field(() => [RoleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RoleOrderByWithRelationInput>;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    cursor?: RoleWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RoleCountAggregateInput, {nullable:true})
    _count?: RoleCountAggregateInput;

    @Field(() => RoleMinAggregateInput, {nullable:true})
    _min?: RoleMinAggregateInput;

    @Field(() => RoleMaxAggregateInput, {nullable:true})
    _max?: RoleMaxAggregateInput;
}
