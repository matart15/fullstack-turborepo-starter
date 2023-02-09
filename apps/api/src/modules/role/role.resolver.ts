import { UseGuards } from '@nestjs/common';
import { Args, Context, GraphQLExecutionContext, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TOTAL_COUNT_HEADER } from '@src/config/constants';
import { NoPermissionException } from '@src/libs/exceptions/NoPermissionException';
import { CreateOneRoleArgs } from 'prisma/@generated/role/args/create-one-role.args';
import { FindManyRoleArgs } from 'prisma/@generated/role/args/find-many-role.args';
import { FindUniqueRoleArgs } from 'prisma/@generated/role/args/find-unique-role.args';
import { UpdateOneRoleArgs } from 'prisma/@generated/role/args/update-one-role.args';
import { Role } from 'prisma/@generated/role/model/role.model';
import { User } from 'prisma/@generated/user/model/user.model';

import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RoleService } from './role.service';

@Resolver()
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Query(() => Role)
  @UseGuards(JwtAuthGuard)
  async findUniqueRole(@Args() args: FindUniqueRoleArgs) {
    return this.roleService.findUnique({
      where: args.where,
    });
  }

  @Query(() => [Role])
  @UseGuards(JwtAuthGuard)
  async findManyRoles(@Context() context: GraphQLExecutionContext, @Args() args: FindManyRoleArgs) {
    const [total, roles] = await this.roleService.findMany(args);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (context as any).res.set({ [TOTAL_COUNT_HEADER]: total });
    return roles;
  }

  @Mutation(() => Role)
  @UseGuards(JwtAuthGuard)
  async createRole(@Args() args: CreateOneRoleArgs, @CurrentUser() user: User): Promise<Role> {
    if (user.role?.name !== 'admin') {
      throw new NoPermissionException();
    }
    return this.roleService.create(args);
  }

  @Mutation(() => Role)
  @UseGuards(JwtAuthGuard)
  async deleteRole(@Args('id') id: string, @CurrentUser() user: User): Promise<Role> {
    if (user.role?.name !== 'admin') {
      throw new NoPermissionException();
    }
    return this.roleService.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  @Mutation(() => Role)
  @UseGuards(JwtAuthGuard)
  async updateRole(@Args() args: UpdateOneRoleArgs): Promise<Role> {
    return this.roleService.update(args);
  }
}
