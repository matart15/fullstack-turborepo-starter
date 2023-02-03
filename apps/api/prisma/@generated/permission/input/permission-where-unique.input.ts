import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PermissionWhereUniqueInput {

    @Field(() => String, {nullable:false})
    id!: string;
}
