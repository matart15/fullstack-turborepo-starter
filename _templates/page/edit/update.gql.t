---
to: apps/web/pages/<%= h.changeCase.camel(name) %>/[id]/update<%= h.changeCase.pascal(name) %>.gql
---
mutation Update<%= h.changeCase.pascal(name) %>($id: String!, $data: <%= h.changeCase.pascal(name) %>UpdateInput!) {
  update<%= h.changeCase.pascal(name) %>(where: { id: $id }, data: $data) {
    id
    createdAt
    updatedAt
    customField
  }
}
