import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Permission } from '../../permission/model/permission.model';
import { User } from '../../user/model/user.model';
import { RoleCount } from '../output/role-count.output';

@ObjectType()
export class Role {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: true })
  description!: string | null;

  @Field(() => [User], { nullable: true })
  users?: Array<User>;

  @Field(() => [Permission], { nullable: true })
  permissions?: Array<Permission>;

  @Field(() => RoleCount, { nullable: false })
  _count?: RoleCount;
}
