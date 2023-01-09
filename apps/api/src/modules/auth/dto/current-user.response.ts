import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CurrentUserResponse {
  @Field()
  id!: string;

  @Field()
  email!: string;

  @Field()
  createdAt!: Date;

  @Field()
  updatedAt!: Date;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  emailConfirmedAt: Date;

  @Field()
  confirmationCode!: string;
}
