import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RoleWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
}
