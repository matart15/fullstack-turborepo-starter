---
to: apps/web/pages/<%= h.changeCase.camel(name) %>/delete<%= h.changeCase.camel(name) %>.gql
---
mutation Delete<%= h.changeCase.pascal(name) %>($id: String!) {
  delete<%= h.changeCase.pascal(name) %>(id: $id) {
    id
  }
}
