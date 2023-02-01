import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { FindManyRoleArgs } from 'prisma/@generated/role/args/find-many-role.args';
import { FindUniqueRoleOrThrowArgs } from 'prisma/@generated/role/args/find-unique-role-or-throw.args';
import { Role } from 'prisma/@generated/role/model/role.model';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RoleService } from './role.service';

@Resolver()
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Query(() => Role)
  @UseGuards(JwtAuthGuard)
  async findUniqueRole(@Args() args: FindUniqueRoleOrThrowArgs) {
    return this.roleService.findUnique({
      where: args.where,
    });
  }

  @Query(() => [Role])
  @UseGuards(JwtAuthGuard)
  async findManyRoles(@Args() args: FindManyRoleArgs) {
    return this.roleService.findMany(args);
  }
}
