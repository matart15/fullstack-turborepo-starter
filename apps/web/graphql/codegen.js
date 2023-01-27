module.exports = {
  schema: [
    {
      'http://localhost:8080/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': 'myadminsecretkey',
        },
      },
    },
  ],
  documents: ['graphql/queries/**/*.gql'],
  overwrite: true,
  generates: {
    'graphql/generated.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        enumsAsConst: true,
      },
    },
    // "apps/admin/graphql/generated.tsx": {
    //   plugins: [
    //     "typescript",
    //     "typescript-operations",
    //     "typescript-react-apollo",
    //   ],
    //   config: {
    //     skipTypename: false,
    //     withHooks: true,
    //     withHOC: false,
    //     withComponent: false,
    //     enumsAsConst: true,
    //   },
    // },
  },
};
