---
to: apps/api/src/modules/<%= h.changeCase.camel(name) %>/<%= h.changeCase.camel(name) %>.module.ts
---

import { Module } from '@nestjs/common';
import { <%= h.changeCase.pascal(name) %>Resolver } from './<%= h.changeCase.camel(name) %>.resolver';
import { <%= h.changeCase.pascal(name) %>Service } from './<%= h.changeCase.camel(name) %>.service';

@Module({
  providers: [<%= h.changeCase.pascal(name) %>Resolver, <%= h.changeCase.pascal(name) %>Service],
})
export class <%= h.changeCase.pascal(name) %>Module {}
