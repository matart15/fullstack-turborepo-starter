import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';

import { PermissionScalarFieldEnum } from '../enum/permission-scalar-field.enum';
import { PermissionOrderByWithRelationInput } from '../input/permission-order-by-with-relation.input';
import { PermissionWhereInput } from '../input/permission-where.input';
import { PermissionWhereUniqueInput } from '../input/permission-where-unique.input';

@ArgsType()
export class FindFirstPermissionArgs {
  @Field(() => PermissionWhereInput, { nullable: true })
  @Type(() => PermissionWhereInput)
  where?: PermissionWhereInput;

  @Field(() => [PermissionOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PermissionOrderByWithRelationInput>;

  @Field(() => PermissionWhereUniqueInput, { nullable: true })
  cursor?: PermissionWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [PermissionScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PermissionScalarFieldEnum>;
}
