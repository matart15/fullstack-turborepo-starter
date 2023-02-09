import { UseGuards } from '@nestjs/common';
import { Args, Context, GraphQLExecutionContext, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TOTAL_COUNT_HEADER } from '@src/config/constants';
import { NoPermissionException } from '@src/libs/exceptions/NoPermissionException';
import { CreateOneUserArgs } from 'prisma/@generated/user/args/create-one-user.args';
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
  async findManyUsers(@Context() context: GraphQLExecutionContext, @Args() args: FindManyUserArgs): Promise<User[]> {
    const [total, users] = await this.userService.findMany(args);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (context as any).res.set({ [TOTAL_COUNT_HEADER]: total });
    return users;
  }

  @Mutation(() => User)
  @UseGuards(JwtAuthGuard)
  async createUser(@Args() args: CreateOneUserArgs, @CurrentUser() user: User): Promise<User> {
    if (user.role?.name !== 'admin') {
      throw new NoPermissionException();
    }
    return this.userService.create({
      ...args,
      include: {
        role: true,
        permissions: true,
      },
    });
  }

  @Mutation(() => User)
  @UseGuards(JwtAuthGuard)
  async deleteUser(@Args('id') id: string, @CurrentUser() user: User): Promise<User> {
    if (user.role?.name !== 'admin') {
      throw new NoPermissionException();
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
