---
to: packages/ui/components/<%= h.changeCase.camel(name) %>/list/interface.ts
---
export interface I<%= h.changeCase.pascal(name) %>List {
  id: string;
  createdAt: string;
  updatedAt: string;
  customField: string;
}
