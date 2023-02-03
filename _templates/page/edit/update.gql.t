---
to: apps/web/pages/<%= h.changeCase.camel(name) %>/[id]/<%= h.changeCase.camel(name) %>Update.gql
---
mutation Update<%= h.changeCase.pascal(name) %>($id: String!, $data: <%= h.changeCase.pascal(name) %>UpdateInput!) {
  update<%= h.changeCase.pascal(name) %>(where: { id: $id }, data: $data) {
    title
  }
}
