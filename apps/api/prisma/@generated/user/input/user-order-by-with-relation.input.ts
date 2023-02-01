import { Field, InputType } from '@nestjs/graphql';

import { PermissionOrderByRelationAggregateInput } from '../../permission/input/permission-order-by-relation-aggregate.input';
import { SortOrder } from '../../prisma/enum/sort-order.enum';
import { RoleOrderByWithRelationInput } from '../../role/input/role-order-by-with-relation.input';

@InputType()
export class UserOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  emailConfirmedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  confirmationCode?: keyof typeof SortOrder;

  @Field(() => RoleOrderByWithRelationInput, { nullable: true })
  role?: RoleOrderByWithRelationInput;

  @Field(() => SortOrder, { nullable: true })
  roleId?: keyof typeof SortOrder;

  @Field(() => PermissionOrderByRelationAggregateInput, { nullable: true })
  permissions?: PermissionOrderByRelationAggregateInput;
}
