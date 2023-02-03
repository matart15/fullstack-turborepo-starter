import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enum/sort-order.enum';

@InputType()
export class PermissionMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tableName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    operation?: keyof typeof SortOrder;
}
