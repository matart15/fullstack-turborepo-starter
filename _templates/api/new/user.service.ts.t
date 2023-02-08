---
to: apps/api/src/modules/<%= h.changeCase.camel(name) %>/<%= h.changeCase.camel(name) %>.service.ts
---
import { Injectable } from '@nestjs/common';
import {
  <%= h.changeCase.pascal(name) %>,
  <%= h.changeCase.pascal(name) %>CreateArgs,
  <%= h.changeCase.pascal(name) %>DeleteArgs,
  <%= h.changeCase.pascal(name) %>FindManyArgs,
  <%= h.changeCase.pascal(name) %>FindUniqueArgs,
  <%= h.changeCase.pascal(name) %>UpdateArgs,
} from '@prisma/client/generator-build';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class <%= h.changeCase.pascal(name) %>Service {
  constructor(private readonly prisma: PrismaService) {}

  async findUnique(args: <%= h.changeCase.pascal(name) %>FindUniqueArgs): Promise<<%= h.changeCase.pascal(name) %> | null> {
    return this.prisma.<%= h.changeCase.camel(name) %>.findUnique(args);
  }

  async findMany(args: <%= h.changeCase.pascal(name) %>FindManyArgs): Promise<[number, <%= h.changeCase.pascal(name) %>[]]> {
    return this.prisma.$transaction([this.prisma.<%= h.changeCase.camel(name) %>.count(args), this.prisma.<%= h.changeCase.camel(name) %>.findMany(args)]);
  }

  async create(args: <%= h.changeCase.pascal(name) %>CreateArgs): Promise<<%= h.changeCase.pascal(name) %>> {
    return this.prisma.<%= h.changeCase.camel(name) %>.create(args);
  }

  async update(args: <%= h.changeCase.pascal(name) %>UpdateArgs): Promise<<%= h.changeCase.pascal(name) %>> {
    return this.prisma.<%= h.changeCase.camel(name) %>.update(args);
  }

  async delete(args: <%= h.changeCase.pascal(name) %>DeleteArgs): Promise<<%= h.changeCase.pascal(name) %>> {
    return this.prisma.<%= h.changeCase.camel(name) %>.delete(args);
  }
}
