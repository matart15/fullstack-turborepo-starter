---
to: apps/web/pages/<%= h.changeCase.camel(name) %>/new/create<%= h.changeCase.pascal(name) %>.gql
---
mutation Create<%= h.changeCase.pascal(name) %>($data: <%= h.changeCase.pascal(name) %>CreateInput!) {
  create<%= h.changeCase.pascal(name) %>(data: $data) {
    id
    createdAt
    updatedAt
    customField
  }
}
