import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PermissionWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
}
