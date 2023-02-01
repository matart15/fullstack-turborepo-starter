import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserCount {
  @Field(() => Int, { nullable: false })
  permissions?: number;
}
