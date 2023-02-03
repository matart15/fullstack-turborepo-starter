import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserWhereInput } from '../input/user-where.input';
import { Type } from 'class-transformer';
import { UserOrderByWithAggregationInput } from '../input/user-order-by-with-aggregation.input';
import { UserScalarFieldEnum } from '../enum/user-scalar-field.enum';
import { UserScalarWhereWithAggregatesInput } from '../input/user-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserCountAggregateInput } from '../input/user-count-aggregate.input';
import { UserMinAggregateInput } from '../input/user-min-aggregate.input';
import { UserMaxAggregateInput } from '../input/user-max-aggregate.input';

@ArgsType()
export class UserGroupByArgs {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;

    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;

    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserScalarWhereWithAggregatesInput;

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
