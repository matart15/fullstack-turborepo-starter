import { Field, HideField, ObjectType } from '@nestjs/graphql';

import { UserCountAggregate } from './user-count-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';

@ObjectType()
export class UserGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @HideField()
  password!: string;

  @Field(() => Date, { nullable: true })
  emailConfirmedAt?: Date | string;

  @Field(() => String, { nullable: false })
  confirmationCode!: string;

  @Field(() => String, { nullable: false })
  roleId!: string;

  @Field(() => UserCountAggregate, { nullable: true })
  _count?: UserCountAggregate;

  @Field(() => UserMinAggregate, { nullable: true })
  _min?: UserMinAggregate;

  @Field(() => UserMaxAggregate, { nullable: true })
  _max?: UserMaxAggregate;
}
