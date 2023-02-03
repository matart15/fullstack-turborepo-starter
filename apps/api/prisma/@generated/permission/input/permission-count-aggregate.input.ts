import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PermissionCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    deletedAt?: true;

    @Field(() => Boolean, {nullable:true})
    tableName?: true;

    @Field(() => Boolean, {nullable:true})
    operation?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
