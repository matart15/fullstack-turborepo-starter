import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RoleMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  description?: string;
}
