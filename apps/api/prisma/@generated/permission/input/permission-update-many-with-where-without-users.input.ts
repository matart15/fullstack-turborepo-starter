import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { PermissionScalarWhereInput } from './permission-scalar-where.input';
import { PermissionUpdateManyMutationInput } from './permission-update-many-mutation.input';

@InputType()
export class PermissionUpdateManyWithWhereWithoutUsersInput {
  @Field(() => PermissionScalarWhereInput, { nullable: false })
  @Type(() => PermissionScalarWhereInput)
  where!: PermissionScalarWhereInput;

  @Field(() => PermissionUpdateManyMutationInput, { nullable: false })
  @Type(() => PermissionUpdateManyMutationInput)
  data!: PermissionUpdateManyMutationInput;
}
