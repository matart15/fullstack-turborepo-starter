import { ArgsType, Field } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { PermissionCreateManyInput } from '../input/permission-create-many.input';

@ArgsType()
export class CreateManyPermissionArgs {
  @Field(() => [PermissionCreateManyInput], { nullable: false })
  @Type(() => PermissionCreateManyInput)
  data!: Array<PermissionCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
