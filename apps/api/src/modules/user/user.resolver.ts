import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { FindManyUserArgs } from 'prisma/@generated/user/args/find-many-user.args';
import { FindUniqueUserArgs } from 'prisma/@generated/user/args/find-unique-user.args';
import { User } from 'prisma/@generated/user/model/user.model';

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
}
