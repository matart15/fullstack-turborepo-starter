---
to: apps/api/src/modules/<%= h.changeCase.camel(name) %>/<%= h.changeCase.camel(name) %>.module.ts
---

import { Module } from '@nestjs/common';
import { <%= h.changeCase.pascal(name) %>Resolver } from './<%= h.changeCase.camel(name) %>.resolver';

@Module({
  providers: [<%= h.changeCase.pascal(name) %>Resolver]
})
export class <%= h.changeCase.pascal(name) %>Module {}
