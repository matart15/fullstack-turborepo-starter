---
to: apps/api/src/modules/<%= h.changeCase.camel(name) %>/<%= h.changeCase.camel(name) %>.resolver.ts
---
import { UseGuards } from '@nestjs/common';
import { Args, Context, GraphQLExecutionContext, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TOTAL_COUNT_HEADER } from '@src/config/constants';
import { FindMany<%= h.changeCase.pascal(name) %>Args } from 'prisma/@generated/<%= h.changeCase.camel(name) %>/args/find-many-<%= h.changeCase.camel(name) %>.args';
import { FindUnique<%= h.changeCase.pascal(name) %>Args } from 'prisma/@generated/<%= h.changeCase.camel(name) %>/args/find-unique-<%= h.changeCase.camel(name) %>.args';
import { UpdateOne<%= h.changeCase.pascal(name) %>Args } from 'prisma/@generated/<%= h.changeCase.camel(name) %>/args/update-one-<%= h.changeCase.camel(name) %>.args';
import { <%= h.changeCase.pascal(name) %> } from 'prisma/@generated/<%= h.changeCase.camel(name) %>/model/<%= h.changeCase.camel(name) %>.model';
import { NoPermissionException } from '@src/libs/exceptions/NoPermissionException';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { <%= h.changeCase.pascal(name) %>Service } from './<%= h.changeCase.camel(name) %>.service';
import { User } from 'prisma/@generated/user/model/user.model';

@Resolver()
export class <%= h.changeCase.pascal(name) %>Resolver {
    constructor(private readonly <%= h.changeCase.camel(name) %>Service: <%= h.changeCase.pascal(name) %>Service) {}

  @Query(() => <%= h.changeCase.pascal(name) %>)
  @UseGuards(JwtAuthGuard)
  async findUnique<%= h.changeCase.pascal(name) %>(@Args() args: FindUnique<%= h.changeCase.pascal(name) %>Args) {
    return this.<%= h.changeCase.camel(name) %>Service.findUnique({
      where: args.where,
    });
  }

  @Query(() => [<%= h.changeCase.pascal(name) %>])
  @UseGuards(JwtAuthGuard)
  async findMany<%= h.changeCase.pascal(name) %>s(@Context() context: GraphQLExecutionContext, @Args() args: FindMany<%= h.changeCase.pascal(name) %>Args) {
    const [total, <%= h.changeCase.camel(name) %>s] = await this.<%= h.changeCase.camel(name) %>Service.findMany(args);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (context as any).res.set({ [TOTAL_COUNT_HEADER]: total });
    return <%= h.changeCase.camel(name) %>s;
  }

  @Mutation(() => <%= h.changeCase.pascal(name) %>)
  @UseGuards(JwtAuthGuard)
  async delete<%= h.changeCase.pascal(name) %>(@Args('id') id: string, @CurrentUser() user: User): Promise<<%= h.changeCase.pascal(name) %>> {
    if (user.role?.name !== 'admin') {
      throw new NoPermissionException();
    }
    return this.<%= h.changeCase.camel(name) %>Service.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }

  @Mutation(() => <%= h.changeCase.pascal(name) %>)
  @UseGuards(JwtAuthGuard)
  async update<%= h.changeCase.pascal(name) %>(@Args() args: UpdateOne<%= h.changeCase.pascal(name) %>Args): Promise<<%= h.changeCase.pascal(name) %>> {
    return this.<%= h.changeCase.camel(name) %>Service.update(args);
  }
}
