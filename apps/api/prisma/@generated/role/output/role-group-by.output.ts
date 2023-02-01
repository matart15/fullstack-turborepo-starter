import { Field, ObjectType } from '@nestjs/graphql';

import { RoleCountAggregate } from './role-count-aggregate.output';
import { RoleMaxAggregate } from './role-max-aggregate.output';
import { RoleMinAggregate } from './role-min-aggregate.output';

@ObjectType()
export class RoleGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => RoleCountAggregate, { nullable: true })
  _count?: RoleCountAggregate;

  @Field(() => RoleMinAggregate, { nullable: true })
  _min?: RoleMinAggregate;

  @Field(() => RoleMaxAggregate, { nullable: true })
  _max?: RoleMaxAggregate;
}
