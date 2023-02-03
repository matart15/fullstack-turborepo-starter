---
to: apps/api/src/modules/<%= h.changeCase.camel(name) %>/<%= h.changeCase.camel(name) %>.resolver.ts
---
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FindMany<%= h.changeCase.pascal(name) %>Args } from 'prisma/@generated/<%= h.changeCase.camel(name) %>/args/find-many-<%= h.changeCase.camel(name) %>.args';
import { FindUnique<%= h.changeCase.pascal(name) %>Args } from 'prisma/@generated/<%= h.changeCase.camel(name) %>/args/find-unique-<%= h.changeCase.camel(name) %>.args';
import { UpdateOne<%= h.changeCase.pascal(name) %>Args } from 'prisma/@generated/<%= h.changeCase.camel(name) %>/args/update-one-<%= h.changeCase.camel(name) %>.args';
import { <%= h.changeCase.pascal(name) %> } from 'prisma/@generated/<%= h.changeCase.camel(name) %>/model/<%= h.changeCase.camel(name) %>.model';

import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { <%= h.changeCase.pascal(name) %>Service } from './<%= h.changeCase.camel(name) %>.service';


@Resolver()
export class <%= h.changeCase.pascal(name) %>Resolver {
    constructor(private readonly <%= h.changeCase.camel(name) %>Service: <%= h.changeCase.pascal(name) %>Service) {}

  @Query(() => <%= h.changeCase.pascal(name) %>)
  @UseGuards(JwtAuthGuard)
  async findUnique<%= h.changeCase.pascal(name) %>(@Args() args: FindUnique<%= h.changeCase.pascal(name) %>Args) {
    return this.<%= h.changeCase.camel(name) %>Service.findUnique({
      where: args.where,
      include: {
        role: true,
        permissions: true,
      },
    });
  }

  @Query(() => [<%= h.changeCase.pascal(name) %>])
  @UseGuards(JwtAuthGuard)
  async findMany<%= h.changeCase.pascal(name) %>s(@Args() args: FindMany<%= h.changeCase.pascal(name) %>Args) {
    return this.<%= h.changeCase.camel(name) %>Service.findMany(args);
  }

  @Mutation(() => <%= h.changeCase.pascal(name) %>)
  @UseGuards(JwtAuthGuard)
  async delete<%= h.changeCase.pascal(name) %>(@Args('id') id: string, @CurrentUser() <%= h.changeCase.camel(name) %>: <%= h.changeCase.pascal(name) %>): Promise<<%= h.changeCase.pascal(name) %>> {
    if (<%= h.changeCase.camel(name) %>.role.name !== 'admin') {
      throw new Error('Only admin can delete <%= h.changeCase.camel(name) %>');
    }
    return this.<%= h.changeCase.camel(name) %>Service.update({
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

  @Mutation(() => <%= h.changeCase.pascal(name) %>)
  @UseGuards(JwtAuthGuard)
  async update<%= h.changeCase.pascal(name) %>(@Args() args: UpdateOne<%= h.changeCase.pascal(name) %>Args, @CurrentUser() <%= h.changeCase.camel(name) %>: <%= h.changeCase.pascal(name) %>): Promise<<%= h.changeCase.pascal(name) %>> {
    if (args.where.id !== <%= h.changeCase.camel(name) %>.id) {
      throw new Error('You can only update your own <%= h.changeCase.camel(name) %>');
    }
    return this.<%= h.changeCase.camel(name) %>Service.update({
      ...args,
      include: {
        role: true,
        permissions: true,
      },
    });
  }
}
