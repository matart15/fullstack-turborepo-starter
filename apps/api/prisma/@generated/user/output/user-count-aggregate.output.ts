import { Field, HideField, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  createdAt!: number;

  @Field(() => Int, { nullable: false })
  updatedAt!: number;

  @Field(() => Int, { nullable: false })
  email!: number;

  @Field(() => Int, { nullable: false })
  name!: number;

  @HideField()
  password!: number;

  @Field(() => Int, { nullable: false })
  emailConfirmedAt!: number;

  @Field(() => Int, { nullable: false })
  confirmationCode!: number;

  @Field(() => Int, { nullable: false })
  roleId!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
