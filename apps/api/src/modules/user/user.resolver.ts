import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FindManyUserArgs } from 'prisma/@generated/user/args/find-many-user.args';
import { FindUniqueUserArgs } from 'prisma/@generated/user/args/find-unique-user.args';
import { UpdateOneUserArgs } from 'prisma/@generated/user/args/update-one-user.args';
import { User } from 'prisma/@generated/user/model/user.model';

import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => User)
  @UseGuards(JwtAuthGuard)
  async findUniqueUser(@Args() args: FindUniqueUserArgs) {
    return this.userService.findUnique({
      where: args.where,
      include: {
        role: true,
        permissions: true,
      },
    });
  }

  @Query(() => [User])
  @UseGuards(JwtAuthGuard)
  async findManyUsers(@Args() args: FindManyUserArgs) {
    return this.userService.findMany(args);
  }

  @Mutation(() => User)
  @UseGuards(JwtAuthGuard)
  async deleteUser(@Args('id') id: string, @CurrentUser() user: User): Promise<User> {
    if (user.role.name !== 'admin') {
      throw new Error('Only admin can delete user user');
    }
    return this.userService.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
      include: {
        role: true,
        permissions: true,
      },
    });
  }

  @Mutation(() => User)
  @UseGuards(JwtAuthGuard)
  async updateUser(@Args() args: UpdateOneUserArgs, @CurrentUser() user: User): Promise<User> {
    if (args.where.id !== user.id) {
      throw new Error('You can only update your own user');
    }
    return this.userService.update({
      ...args,
      include: {
        role: true,
        permissions: true,
      },
    });
  }
}
