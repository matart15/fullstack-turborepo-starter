import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CurrentUserResponse = {
  __typename?: 'CurrentUserResponse';
  confirmationCode: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  emailConfirmedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type UserChangePasswordInput = {
  newPassword: Scalars['String'];
};

export type UserSignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserSignInResponse = {
  __typename?: 'UserSignInResponse';
  jwtToken: Scalars['String'];
};

export type UserSignUpInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  changePassword: Scalars['Boolean'];
  confirmUserEmail: Scalars['Boolean'];
  signInUser: UserSignInResponse;
  signUpUser: Scalars['Boolean'];
};


/** mutation root */
export type Mutation_RootChangePasswordArgs = {
  data: UserChangePasswordInput;
};


/** mutation root */
export type Mutation_RootConfirmUserEmailArgs = {
  token: Scalars['String'];
};


/** mutation root */
export type Mutation_RootSignInUserArgs = {
  data: UserSignInInput;
};


/** mutation root */
export type Mutation_RootSignUpUserArgs = {
  data: UserSignUpInput;
};

export type Query_Root = {
  __typename?: 'query_root';
  currentUser: CurrentUserResponse;
  sayHello: Scalars['String'];
};

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'query_root', currentUser: { __typename?: 'CurrentUserResponse', id: string, createdAt: any, updatedAt: any, email: string, name?: string | null, emailConfirmedAt?: any | null, confirmationCode: string } };

export type SignUpUserMutationVariables = Exact<{
  data: UserSignUpInput;
}>;


export type SignUpUserMutation = { __typename?: 'mutation_root', signUpUser: boolean };

export type ChangePasswordMutationVariables = Exact<{
  data: UserChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'mutation_root', changePassword: boolean };

export type SignInUserMutationVariables = Exact<{
  data: UserSignInInput;
}>;


export type SignInUserMutation = { __typename?: 'mutation_root', signInUser: { __typename?: 'UserSignInResponse', jwtToken: string } };

export type ConfirmUserEmailMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type ConfirmUserEmailMutation = { __typename?: 'mutation_root', confirmUserEmail: boolean };


export const CurrentUserDocument = gql`
    query CurrentUser {
  currentUser {
    id
    createdAt
    updatedAt
    email
    name
    emailConfirmedAt
    confirmationCode
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const SignUpUserDocument = gql`
    mutation SignUpUser($data: UserSignUpInput!) {
  signUpUser(data: $data)
}
    `;
export type SignUpUserMutationFn = Apollo.MutationFunction<SignUpUserMutation, SignUpUserMutationVariables>;

/**
 * __useSignUpUserMutation__
 *
 * To run a mutation, you first call `useSignUpUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpUserMutation, { data, loading, error }] = useSignUpUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignUpUserMutation(baseOptions?: Apollo.MutationHookOptions<SignUpUserMutation, SignUpUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpUserMutation, SignUpUserMutationVariables>(SignUpUserDocument, options);
      }
export type SignUpUserMutationHookResult = ReturnType<typeof useSignUpUserMutation>;
export type SignUpUserMutationResult = Apollo.MutationResult<SignUpUserMutation>;
export type SignUpUserMutationOptions = Apollo.BaseMutationOptions<SignUpUserMutation, SignUpUserMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($data: UserChangePasswordInput!) {
  changePassword(data: $data)
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const SignInUserDocument = gql`
    mutation SignInUser($data: UserSignInInput!) {
  signInUser(data: $data) {
    jwtToken
  }
}
    `;
export type SignInUserMutationFn = Apollo.MutationFunction<SignInUserMutation, SignInUserMutationVariables>;

/**
 * __useSignInUserMutation__
 *
 * To run a mutation, you first call `useSignInUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInUserMutation, { data, loading, error }] = useSignInUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignInUserMutation(baseOptions?: Apollo.MutationHookOptions<SignInUserMutation, SignInUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInUserMutation, SignInUserMutationVariables>(SignInUserDocument, options);
      }
export type SignInUserMutationHookResult = ReturnType<typeof useSignInUserMutation>;
export type SignInUserMutationResult = Apollo.MutationResult<SignInUserMutation>;
export type SignInUserMutationOptions = Apollo.BaseMutationOptions<SignInUserMutation, SignInUserMutationVariables>;
export const ConfirmUserEmailDocument = gql`
    mutation ConfirmUserEmail($token: String!) {
  confirmUserEmail(token: $token)
}
    `;
export type ConfirmUserEmailMutationFn = Apollo.MutationFunction<ConfirmUserEmailMutation, ConfirmUserEmailMutationVariables>;

/**
 * __useConfirmUserEmailMutation__
 *
 * To run a mutation, you first call `useConfirmUserEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmUserEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmUserEmailMutation, { data, loading, error }] = useConfirmUserEmailMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useConfirmUserEmailMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmUserEmailMutation, ConfirmUserEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmUserEmailMutation, ConfirmUserEmailMutationVariables>(ConfirmUserEmailDocument, options);
      }
export type ConfirmUserEmailMutationHookResult = ReturnType<typeof useConfirmUserEmailMutation>;
export type ConfirmUserEmailMutationResult = Apollo.MutationResult<ConfirmUserEmailMutation>;
export type ConfirmUserEmailMutationOptions = Apollo.BaseMutationOptions<ConfirmUserEmailMutation, ConfirmUserEmailMutationVariables>;