import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => Date, { nullable: true })
  emailConfirmedAt?: Date | string;

  @Field(() => String, { nullable: false })
  confirmationCode!: string;

  @Field(() => String, { nullable: false })
  roleId!: string;
}
