import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'nestjs-prisma';
import { FindManyPermissionArgs } from 'prisma/@generated/permission/args/find-many-permission.args';
import { Permission } from 'prisma/@generated/permission/model/permission.model';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Resolver()
export class PermissionResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => [Permission])
  @UseGuards(JwtAuthGuard)
  findManyPermissions(@Args() args: FindManyPermissionArgs) {
    return this.prisma.permission.findMany(args);
  }
}
