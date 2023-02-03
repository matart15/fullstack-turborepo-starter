import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PermissionOperation } from '../../prisma/enum/permission-operation.enum';

@ObjectType()
export class PermissionMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    tableName?: string;

    @Field(() => PermissionOperation, {nullable:true})
    operation?: keyof typeof PermissionOperation;
}
