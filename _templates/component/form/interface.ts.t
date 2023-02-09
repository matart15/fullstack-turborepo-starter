---
to: packages/ui/components/<%= h.changeCase.camel(name) %>/form/interface.ts
---
export interface I<%= h.changeCase.pascal(name) %>Form {
  id: string;
  createdAt: string;
  updatedAt: string;
  customField: string;
}
