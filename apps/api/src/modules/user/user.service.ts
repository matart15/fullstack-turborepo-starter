import { Injectable } from '@nestjs/common';
import {
  User,
  UserCreateArgs,
  UserDeleteArgs,
  UserFindManyArgs,
  UserFindUniqueArgs,
  UserUpdateArgs,
} from '@prisma/client/generator-build';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findUnique(args: UserFindUniqueArgs): Promise<User | null> {
    return this.prisma.user.findUnique(args);
  }

  async findMany(args: UserFindManyArgs): Promise<[number, User[]]> {
    return this.prisma.$transaction([
      this.prisma.user.count({
        ...args,
        skip: undefined,
        take: undefined,
      }),
      this.prisma.user.findMany(args),
    ]);
  }

  async create(args: UserCreateArgs): Promise<User> {
    return this.prisma.user.create({
      ...args,
      data: {
        ...args.data,
        password: await this.hashUserPassword(args),
      },
    });
  }

  async update(args: UserUpdateArgs): Promise<User> {
    return this.prisma.user.update({
      ...args,
      data: {
        ...args.data,
        password: args.data.password ? await this.hashUserPassword(args) : undefined,
      },
    });
  }

  async delete(args: UserDeleteArgs): Promise<User> {
    return this.prisma.user.delete(args);
  }

  private async hashUserPassword(args: UserCreateArgs): Promise<string> {
    return bcrypt.hash(args.data.password, 10);
  }
}
