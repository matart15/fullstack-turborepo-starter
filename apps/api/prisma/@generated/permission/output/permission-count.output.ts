import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PermissionCount {
  @Field(() => Int, { nullable: false })
  users?: number;

  @Field(() => Int, { nullable: false })
  roles?: number;
}
