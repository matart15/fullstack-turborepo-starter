import { Field, ObjectType } from '@nestjs/graphql';

import { RoleCountAggregate } from './role-count-aggregate.output';
import { RoleMaxAggregate } from './role-max-aggregate.output';
import { RoleMinAggregate } from './role-min-aggregate.output';

@ObjectType()
export class AggregateRole {
  @Field(() => RoleCountAggregate, { nullable: true })
  _count?: RoleCountAggregate;

  @Field(() => RoleMinAggregate, { nullable: true })
  _min?: RoleMinAggregate;

  @Field(() => RoleMaxAggregate, { nullable: true })
  _max?: RoleMaxAggregate;
}
