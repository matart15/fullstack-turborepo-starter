---
to: apps/web/pages/<%= h.changeCase.camel(name) %>/[id]/<%= h.changeCase.camel(name) %>Detail.gql
---
query <%= h.changeCase.pascal(name) %>Detail($where: <%= h.changeCase.pascal(name) %>WhereUniqueInput!) {
  findUnique<%= h.changeCase.pascal(name) %>(where: $where) {
    customField
  }
}
