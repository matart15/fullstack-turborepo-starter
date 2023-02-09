import { Injectable } from '@nestjs/common';
import {
  Role,
  RoleCreateArgs,
  RoleDeleteArgs,
  RoleFindManyArgs,
  RoleFindUniqueArgs,
  RoleUpdateArgs,
} from '@prisma/client/generator-build';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}

  async findUnique(args: RoleFindUniqueArgs): Promise<Role | null> {
    return this.prisma.role.findUnique(args);
  }

  async findMany(args: RoleFindManyArgs): Promise<[number, Role[]]> {
    return this.prisma.$transaction([this.prisma.role.count(args), this.prisma.role.findMany(args)]);
  }

  async create(args: RoleCreateArgs): Promise<Role> {
    return this.prisma.role.create(args);
  }

  async update(args: RoleUpdateArgs): Promise<Role> {
    return this.prisma.role.update(args);
  }

  async delete(args: RoleDeleteArgs): Promise<Role> {
    return this.prisma.role.delete(args);
  }
}
