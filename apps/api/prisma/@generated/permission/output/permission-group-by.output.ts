import { Field, ObjectType } from '@nestjs/graphql';

import { PermissionOperation } from '../../prisma/enum/permission-operation.enum';
import { PermissionCountAggregate } from './permission-count-aggregate.output';
import { PermissionMaxAggregate } from './permission-max-aggregate.output';
import { PermissionMinAggregate } from './permission-min-aggregate.output';

@ObjectType()
export class PermissionGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  tableName!: string;

  @Field(() => PermissionOperation, { nullable: false })
  operation!: keyof typeof PermissionOperation;

  @Field(() => PermissionCountAggregate, { nullable: true })
  _count?: PermissionCountAggregate;

  @Field(() => PermissionMinAggregate, { nullable: true })
  _min?: PermissionMinAggregate;

  @Field(() => PermissionMaxAggregate, { nullable: true })
  _max?: PermissionMaxAggregate;
}
