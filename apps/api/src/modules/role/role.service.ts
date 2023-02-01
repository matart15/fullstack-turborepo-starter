import { Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import { RoleFindManyArgs, RoleFindUniqueArgs } from '@prisma/client/generator-build';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}

  async findUnique(args: RoleFindUniqueArgs): Promise<Role | null> {
    return this.prisma.role.findUnique(args);
  }

  async findMany(args: RoleFindManyArgs): Promise<Role[]> {
    return this.prisma.role.findMany(args);
  }
}
