import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PermissionCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  tableName!: number;

  @Field(() => Int, { nullable: false })
  operation!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
