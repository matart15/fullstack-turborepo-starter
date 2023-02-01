import { Injectable } from '@nestjs/common';
import { PermissionFindFirstOrThrowArgs, PermissionFindManyArgs } from '@prisma/client/generator-build';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PermissionService {
  constructor(private readonly prisma: PrismaService) {}

  async findFirstPermissionOrThrow(args: PermissionFindFirstOrThrowArgs) {
    return this.prisma.permission.findFirstOrThrow(args);
  }

  async findManyPermissions(args: PermissionFindManyArgs) {
    return this.prisma.permission.findMany(args);
  }
}
