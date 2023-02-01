import { ArgsType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { PermissionUpdateManyMutationInput } from '../input/permission-update-many-mutation.input';
import { PermissionWhereInput } from '../input/permission-where.input';

@ArgsType()
export class UpdateManyPermissionArgs {
  @Field(() => PermissionUpdateManyMutationInput, { nullable: false })
  @Type(() => PermissionUpdateManyMutationInput)
  data!: PermissionUpdateManyMutationInput;

  @Field(() => PermissionWhereInput, { nullable: true })
  @Type(() => PermissionWhereInput)
  where?: PermissionWhereInput;
}
