---
to: packages/ui/components/<%= h.changeCase.camel(name) %>/list/interface.ts
---
export interface I<%= h.changeCase.pascal(name) %>List {
  customField: string;
}
