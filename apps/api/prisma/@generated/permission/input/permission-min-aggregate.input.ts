import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PermissionMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  tableName?: true;

  @Field(() => Boolean, { nullable: true })
  operation?: true;
}
