import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleUpdateManyMutationInput } from '../input/role-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RoleWhereInput } from '../input/role-where.input';

@ArgsType()
export class UpdateManyRoleArgs {

    @Field(() => RoleUpdateManyMutationInput, {nullable:false})
    @Type(() => RoleUpdateManyMutationInput)
    data!: RoleUpdateManyMutationInput;

    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: RoleWhereInput;
}
