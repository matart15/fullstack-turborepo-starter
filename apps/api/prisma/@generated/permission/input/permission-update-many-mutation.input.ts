import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionOperation } from '../../prisma/enum/permission-operation.enum';

@InputType()
export class PermissionUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    tableName?: string;

    @Field(() => PermissionOperation, {nullable:true})
    operation?: keyof typeof PermissionOperation;
}
