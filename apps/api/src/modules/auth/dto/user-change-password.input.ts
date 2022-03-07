import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserChangePasswordInput {
  @Field()
  newPassword!: string;
}
