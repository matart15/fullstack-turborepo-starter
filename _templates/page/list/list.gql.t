---
to: apps/web/pages/<%= h.changeCase.camel(name) %>/<%= h.changeCase.camel(name) %>List.gql
---
query <%= h.changeCase.pascal(name) %>List(
  $cursor: <%= h.changeCase.pascal(name) %>WhereUniqueInput
  $distinct: [<%= h.changeCase.pascal(name) %>ScalarFieldEnum!]
  $orderBy: [<%= h.changeCase.pascal(name) %>OrderByWithRelationInput!]
  $skip: Int
  $take: Int
  $where: <%= h.changeCase.pascal(name) %>WhereInput
) {
  findMany<%= h.changeCase.pascal(name) %>s(cursor: $cursor, distinct: $distinct, orderBy: $orderBy, skip: $skip, take: $take, where: $where) {
    field
  }
}
