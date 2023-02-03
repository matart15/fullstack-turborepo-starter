import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionUpdateInput } from '../input/permission-update.input';
import { Type } from 'class-transformer';
import { PermissionWhereUniqueInput } from '../input/permission-where-unique.input';

@ArgsType()
export class UpdateOnePermissionArgs {

    @Field(() => PermissionUpdateInput, {nullable:false})
    @Type(() => PermissionUpdateInput)
    data!: PermissionUpdateInput;

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    @Type(() => PermissionWhereUniqueInput)
    where!: PermissionWhereUniqueInput;
}
