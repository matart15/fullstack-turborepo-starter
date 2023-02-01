import { ArgsType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { PermissionCreateInput } from '../input/permission-create.input';

@ArgsType()
export class CreateOnePermissionArgs {
  @Field(() => PermissionCreateInput, { nullable: false })
  @Type(() => PermissionCreateInput)
  data!: PermissionCreateInput;
}
