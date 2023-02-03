import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserWhereInput } from '../input/user-where.input';
import { Type } from 'class-transformer';
import { UserOrderByWithRelationInput } from '../input/user-order-by-with-relation.input';
import { UserWhereUniqueInput } from '../input/user-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserCountAggregateInput } from '../input/user-count-aggregate.input';
import { UserMinAggregateInput } from '../input/user-min-aggregate.input';
import { UserMaxAggregateInput } from '../input/user-max-aggregate.input';

@ArgsType()
export class UserAggregateArgs {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: UserWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: UserCountAggregateInput;

    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: UserMinAggregateInput;

    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: UserMaxAggregateInput;
}
