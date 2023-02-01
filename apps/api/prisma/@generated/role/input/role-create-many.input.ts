import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RoleCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  description?: string;
}
