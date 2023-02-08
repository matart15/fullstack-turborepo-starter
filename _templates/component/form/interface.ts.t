---
to: packages/ui/components/<%= h.changeCase.camel(name) %>/edit/interface.ts
---
export interface I<%= h.changeCase.pascal(name) %>Edit {
  customField: string;
}
