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

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumPermissionOperationFilter = {
  equals?: InputMaybe<PermissionOperation>;
  in?: InputMaybe<Array<PermissionOperation>>;
  not?: InputMaybe<NestedEnumPermissionOperationFilter>;
  notIn?: InputMaybe<Array<PermissionOperation>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: Scalars['Boolean'];
  confirmUserEmail: Scalars['Boolean'];
  createRole: Role;
  createUser: User;
  deleteRole: Role;
  deleteUser: User;
  signInUser: UserSignInResponse;
  signUpUser: Scalars['Boolean'];
  updateRole: Role;
  updateUser: User;
};


export type MutationChangePasswordArgs = {
  data: UserChangePasswordInput;
};


export type MutationConfirmUserEmailArgs = {
  token: Scalars['String'];
};


export type MutationCreateRoleArgs = {
  data: RoleCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteRoleArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationSignInUserArgs = {
  data: UserSignInInput;
};


export type MutationSignUpUserArgs = {
  data: UserSignUpInput;
};


export type MutationUpdateRoleArgs = {
  data: RoleUpdateInput;
  where: RoleWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumPermissionOperationFilter = {
  equals?: InputMaybe<PermissionOperation>;
  in?: InputMaybe<Array<PermissionOperation>>;
  not?: InputMaybe<NestedEnumPermissionOperationFilter>;
  notIn?: InputMaybe<Array<PermissionOperation>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Permission = {
  __typename?: 'Permission';
  _count: PermissionCount;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  operation: PermissionOperation;
  roles?: Maybe<Array<Role>>;
  tableName: Scalars['String'];
  users?: Maybe<Array<User>>;
};

export type PermissionCount = {
  __typename?: 'PermissionCount';
  roles: Scalars['Int'];
  users: Scalars['Int'];
};

export type PermissionCreateNestedManyWithoutRolesInput = {
  connect?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PermissionCreateOrConnectWithoutRolesInput>>;
  create?: InputMaybe<Array<PermissionCreateWithoutRolesInput>>;
};

export type PermissionCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PermissionCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<PermissionCreateWithoutUsersInput>>;
};

export type PermissionCreateOrConnectWithoutRolesInput = {
  create: PermissionCreateWithoutRolesInput;
  where: PermissionWhereUniqueInput;
};

export type PermissionCreateOrConnectWithoutUsersInput = {
  create: PermissionCreateWithoutUsersInput;
  where: PermissionWhereUniqueInput;
};

export type PermissionCreateWithoutRolesInput = {
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  operation: PermissionOperation;
  tableName: Scalars['String'];
  users?: InputMaybe<UserCreateNestedManyWithoutPermissionsInput>;
};

export type PermissionCreateWithoutUsersInput = {
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  operation: PermissionOperation;
  roles?: InputMaybe<RoleCreateNestedManyWithoutPermissionsInput>;
  tableName: Scalars['String'];
};

export type PermissionListRelationFilter = {
  every?: InputMaybe<PermissionWhereInput>;
  none?: InputMaybe<PermissionWhereInput>;
  some?: InputMaybe<PermissionWhereInput>;
};

export const PermissionOperation = {
  Create: 'CREATE',
  Delete: 'DELETE',
  Read: 'READ',
  Update: 'UPDATE'
} as const;

export type PermissionOperation = typeof PermissionOperation[keyof typeof PermissionOperation];
export type PermissionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PermissionOrderByWithRelationInput = {
  deletedAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  operation?: InputMaybe<SortOrder>;
  roles?: InputMaybe<RoleOrderByRelationAggregateInput>;
  tableName?: InputMaybe<SortOrder>;
  users?: InputMaybe<UserOrderByRelationAggregateInput>;
};

export const PermissionScalarFieldEnum = {
  DeletedAt: 'deletedAt',
  Id: 'id',
  Operation: 'operation',
  TableName: 'tableName'
} as const;

export type PermissionScalarFieldEnum = typeof PermissionScalarFieldEnum[keyof typeof PermissionScalarFieldEnum];
export type PermissionScalarWhereInput = {
  AND?: InputMaybe<Array<PermissionScalarWhereInput>>;
  NOT?: InputMaybe<Array<PermissionScalarWhereInput>>;
  OR?: InputMaybe<Array<PermissionScalarWhereInput>>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  operation?: InputMaybe<EnumPermissionOperationFilter>;
  tableName?: InputMaybe<StringFilter>;
};

export type PermissionUpdateManyMutationInput = {
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  operation?: InputMaybe<PermissionOperation>;
  tableName?: InputMaybe<Scalars['String']>;
};

export type PermissionUpdateManyWithWhereWithoutRolesInput = {
  data: PermissionUpdateManyMutationInput;
  where: PermissionScalarWhereInput;
};

export type PermissionUpdateManyWithWhereWithoutUsersInput = {
  data: PermissionUpdateManyMutationInput;
  where: PermissionScalarWhereInput;
};

export type PermissionUpdateManyWithoutRolesNestedInput = {
  connect?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PermissionCreateOrConnectWithoutRolesInput>>;
  create?: InputMaybe<Array<PermissionCreateWithoutRolesInput>>;
  delete?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PermissionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  set?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  update?: InputMaybe<Array<PermissionUpdateWithWhereUniqueWithoutRolesInput>>;
  updateMany?: InputMaybe<Array<PermissionUpdateManyWithWhereWithoutRolesInput>>;
  upsert?: InputMaybe<Array<PermissionUpsertWithWhereUniqueWithoutRolesInput>>;
};

export type PermissionUpdateManyWithoutUsersNestedInput = {
  connect?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PermissionCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<PermissionCreateWithoutUsersInput>>;
  delete?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PermissionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  set?: InputMaybe<Array<PermissionWhereUniqueInput>>;
  update?: InputMaybe<Array<PermissionUpdateWithWhereUniqueWithoutUsersInput>>;
  updateMany?: InputMaybe<Array<PermissionUpdateManyWithWhereWithoutUsersInput>>;
  upsert?: InputMaybe<Array<PermissionUpsertWithWhereUniqueWithoutUsersInput>>;
};

export type PermissionUpdateWithWhereUniqueWithoutRolesInput = {
  data: PermissionUpdateWithoutRolesInput;
  where: PermissionWhereUniqueInput;
};

export type PermissionUpdateWithWhereUniqueWithoutUsersInput = {
  data: PermissionUpdateWithoutUsersInput;
  where: PermissionWhereUniqueInput;
};

export type PermissionUpdateWithoutRolesInput = {
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  operation?: InputMaybe<PermissionOperation>;
  tableName?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<UserUpdateManyWithoutPermissionsNestedInput>;
};

export type PermissionUpdateWithoutUsersInput = {
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  operation?: InputMaybe<PermissionOperation>;
  roles?: InputMaybe<RoleUpdateManyWithoutPermissionsNestedInput>;
  tableName?: InputMaybe<Scalars['String']>;
};

export type PermissionUpsertWithWhereUniqueWithoutRolesInput = {
  create: PermissionCreateWithoutRolesInput;
  update: PermissionUpdateWithoutRolesInput;
  where: PermissionWhereUniqueInput;
};

export type PermissionUpsertWithWhereUniqueWithoutUsersInput = {
  create: PermissionCreateWithoutUsersInput;
  update: PermissionUpdateWithoutUsersInput;
  where: PermissionWhereUniqueInput;
};

export type PermissionWhereInput = {
  AND?: InputMaybe<Array<PermissionWhereInput>>;
  NOT?: InputMaybe<Array<PermissionWhereInput>>;
  OR?: InputMaybe<Array<PermissionWhereInput>>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  operation?: InputMaybe<EnumPermissionOperationFilter>;
  roles?: InputMaybe<RoleListRelationFilter>;
  tableName?: InputMaybe<StringFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type PermissionWhereUniqueInput = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  currentUser: CurrentUserResponse;
  findManyPermissions: Array<Permission>;
  findManyRoles: Array<Role>;
  findManyUsers: Array<User>;
  findUniqueRole: Role;
  findUniqueUser: User;
  sayHello: Scalars['String'];
};


export type QueryFindManyPermissionsArgs = {
  cursor?: InputMaybe<PermissionWhereUniqueInput>;
  distinct?: InputMaybe<Array<PermissionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PermissionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PermissionWhereInput>;
};


export type QueryFindManyRolesArgs = {
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<RoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
};


export type QueryFindManyUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindUniqueRoleArgs = {
  where: RoleWhereUniqueInput;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};

export const QueryMode = {
  Default: 'default',
  Insensitive: 'insensitive'
} as const;

export type QueryMode = typeof QueryMode[keyof typeof QueryMode];
export type Role = {
  __typename?: 'Role';
  _count: RoleCount;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Permission>>;
  users?: Maybe<Array<User>>;
};

export type RoleCount = {
  __typename?: 'RoleCount';
  permissions: Scalars['Int'];
  users: Scalars['Int'];
};

export type RoleCreateInput = {
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<PermissionCreateNestedManyWithoutRolesInput>;
  users?: InputMaybe<UserCreateNestedManyWithoutRoleInput>;
};

export type RoleCreateNestedManyWithoutPermissionsInput = {
  connect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RoleCreateOrConnectWithoutPermissionsInput>>;
  create?: InputMaybe<Array<RoleCreateWithoutPermissionsInput>>;
};

export type RoleCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<RoleCreateWithoutUsersInput>;
};

export type RoleCreateOrConnectWithoutPermissionsInput = {
  create: RoleCreateWithoutPermissionsInput;
  where: RoleWhereUniqueInput;
};

export type RoleCreateOrConnectWithoutUsersInput = {
  create: RoleCreateWithoutUsersInput;
  where: RoleWhereUniqueInput;
};

export type RoleCreateWithoutPermissionsInput = {
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  users?: InputMaybe<UserCreateNestedManyWithoutRoleInput>;
};

export type RoleCreateWithoutUsersInput = {
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<PermissionCreateNestedManyWithoutRolesInput>;
};

export type RoleListRelationFilter = {
  every?: InputMaybe<RoleWhereInput>;
  none?: InputMaybe<RoleWhereInput>;
  some?: InputMaybe<RoleWhereInput>;
};

export type RoleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RoleOrderByWithRelationInput = {
  deletedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  permissions?: InputMaybe<PermissionOrderByRelationAggregateInput>;
  users?: InputMaybe<UserOrderByRelationAggregateInput>;
};

export const RoleScalarFieldEnum = {
  DeletedAt: 'deletedAt',
  Description: 'description',
  Id: 'id',
  Name: 'name'
} as const;

export type RoleScalarFieldEnum = typeof RoleScalarFieldEnum[keyof typeof RoleScalarFieldEnum];
export type RoleScalarWhereInput = {
  AND?: InputMaybe<Array<RoleScalarWhereInput>>;
  NOT?: InputMaybe<Array<RoleScalarWhereInput>>;
  OR?: InputMaybe<Array<RoleScalarWhereInput>>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type RoleUpdateInput = {
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<PermissionUpdateManyWithoutRolesNestedInput>;
  users?: InputMaybe<UserUpdateManyWithoutRoleNestedInput>;
};

export type RoleUpdateManyMutationInput = {
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type RoleUpdateManyWithWhereWithoutPermissionsInput = {
  data: RoleUpdateManyMutationInput;
  where: RoleScalarWhereInput;
};

export type RoleUpdateManyWithoutPermissionsNestedInput = {
  connect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RoleCreateOrConnectWithoutPermissionsInput>>;
  create?: InputMaybe<Array<RoleCreateWithoutPermissionsInput>>;
  delete?: InputMaybe<Array<RoleWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RoleScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RoleWhereUniqueInput>>;
  set?: InputMaybe<Array<RoleWhereUniqueInput>>;
  update?: InputMaybe<Array<RoleUpdateWithWhereUniqueWithoutPermissionsInput>>;
  updateMany?: InputMaybe<Array<RoleUpdateManyWithWhereWithoutPermissionsInput>>;
  upsert?: InputMaybe<Array<RoleUpsertWithWhereUniqueWithoutPermissionsInput>>;
};

export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
  connect?: InputMaybe<RoleWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoleCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<RoleCreateWithoutUsersInput>;
  update?: InputMaybe<RoleUpdateWithoutUsersInput>;
  upsert?: InputMaybe<RoleUpsertWithoutUsersInput>;
};

export type RoleUpdateWithWhereUniqueWithoutPermissionsInput = {
  data: RoleUpdateWithoutPermissionsInput;
  where: RoleWhereUniqueInput;
};

export type RoleUpdateWithoutPermissionsInput = {
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<UserUpdateManyWithoutRoleNestedInput>;
};

export type RoleUpdateWithoutUsersInput = {
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<PermissionUpdateManyWithoutRolesNestedInput>;
};

export type RoleUpsertWithWhereUniqueWithoutPermissionsInput = {
  create: RoleCreateWithoutPermissionsInput;
  update: RoleUpdateWithoutPermissionsInput;
  where: RoleWhereUniqueInput;
};

export type RoleUpsertWithoutUsersInput = {
  create: RoleCreateWithoutUsersInput;
  update: RoleUpdateWithoutUsersInput;
};

export type RoleWhereInput = {
  AND?: InputMaybe<Array<RoleWhereInput>>;
  NOT?: InputMaybe<Array<RoleWhereInput>>;
  OR?: InputMaybe<Array<RoleWhereInput>>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<PermissionListRelationFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type RoleWhereUniqueInput = {
  id: Scalars['String'];
};

export const SortOrder = {
  Asc: 'asc',
  Desc: 'desc'
} as const;

export type SortOrder = typeof SortOrder[keyof typeof SortOrder];
export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  confirmationCode: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  emailConfirmedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Permission>>;
  role: Role;
  roleId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserChangePasswordInput = {
  newPassword: Scalars['String'];
};

export type UserCount = {
  __typename?: 'UserCount';
  permissions: Scalars['Int'];
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<PermissionCreateNestedManyWithoutUsersInput>;
  role: RoleCreateNestedOneWithoutUsersInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManyRoleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateManyRoleInputEnvelope = {
  data: Array<UserCreateManyRoleInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserCreateNestedManyWithoutPermissionsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutPermissionsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutPermissionsInput>>;
};

export type UserCreateNestedManyWithoutRoleInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutRoleInput>>;
  create?: InputMaybe<Array<UserCreateWithoutRoleInput>>;
  createMany?: InputMaybe<UserCreateManyRoleInputEnvelope>;
};

export type UserCreateOrConnectWithoutPermissionsInput = {
  create: UserCreateWithoutPermissionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRoleInput = {
  create: UserCreateWithoutRoleInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutPermissionsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  role: RoleCreateNestedOneWithoutUsersInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateWithoutRoleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<PermissionCreateNestedManyWithoutUsersInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  permissions?: InputMaybe<PermissionOrderByRelationAggregateInput>;
  role?: InputMaybe<RoleOrderByWithRelationInput>;
  roleId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export const UserScalarFieldEnum = {
  ConfirmationCode: 'confirmationCode',
  CreatedAt: 'createdAt',
  DeletedAt: 'deletedAt',
  Email: 'email',
  EmailConfirmedAt: 'emailConfirmedAt',
  Id: 'id',
  Name: 'name',
  Password: 'password',
  RoleId: 'roleId',
  UpdatedAt: 'updatedAt'
} as const;

export type UserScalarFieldEnum = typeof UserScalarFieldEnum[keyof typeof UserScalarFieldEnum];
export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringNullableFilter>;
  roleId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
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

export type UserUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<PermissionUpdateManyWithoutUsersNestedInput>;
  role?: InputMaybe<RoleUpdateOneRequiredWithoutUsersNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserUpdateManyWithWhereWithoutPermissionsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutRoleInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutPermissionsNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutPermissionsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutPermissionsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutPermissionsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutPermissionsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutPermissionsInput>>;
};

export type UserUpdateManyWithoutRoleNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutRoleInput>>;
  create?: InputMaybe<Array<UserCreateWithoutRoleInput>>;
  createMany?: InputMaybe<UserCreateManyRoleInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutRoleInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutRoleInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutRoleInput>>;
};

export type UserUpdateWithWhereUniqueWithoutPermissionsInput = {
  data: UserUpdateWithoutPermissionsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutRoleInput = {
  data: UserUpdateWithoutRoleInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutPermissionsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<RoleUpdateOneRequiredWithoutUsersNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserUpdateWithoutRoleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deletedAt?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<PermissionUpdateManyWithoutUsersNestedInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserUpsertWithWhereUniqueWithoutPermissionsInput = {
  create: UserCreateWithoutPermissionsInput;
  update: UserUpdateWithoutPermissionsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutRoleInput = {
  create: UserCreateWithoutRoleInput;
  update: UserUpdateWithoutRoleInput;
  where: UserWhereUniqueInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringNullableFilter>;
  permissions?: InputMaybe<PermissionListRelationFilter>;
  role?: InputMaybe<RoleWhereInput>;
  roleId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser: { __typename?: 'CurrentUserResponse', id: string, createdAt: any, updatedAt: any, email: string, name?: string | null, emailConfirmedAt?: any | null, confirmationCode: string } };

export type SignUpUserMutationVariables = Exact<{
  data: UserSignUpInput;
}>;


export type SignUpUserMutation = { __typename?: 'Mutation', signUpUser: boolean };

export type SignInUserMutationVariables = Exact<{
  data: UserSignInInput;
}>;


export type SignInUserMutation = { __typename?: 'Mutation', signInUser: { __typename?: 'UserSignInResponse', jwtToken: string } };

export type ConfirmUserEmailMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type ConfirmUserEmailMutation = { __typename?: 'Mutation', confirmUserEmail: boolean };

export type PermissionListQueryVariables = Exact<{
  cursor?: InputMaybe<PermissionWhereUniqueInput>;
  distinct?: InputMaybe<Array<PermissionScalarFieldEnum> | PermissionScalarFieldEnum>;
  orderBy?: InputMaybe<Array<PermissionOrderByWithRelationInput> | PermissionOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PermissionWhereInput>;
}>;


export type PermissionListQuery = { __typename?: 'Query', findManyPermissions: Array<{ __typename?: 'Permission', id: string, operation: PermissionOperation, tableName: string }> };

export type ChangePasswordMutationVariables = Exact<{
  data: UserChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: boolean };

export type RoleDetailQueryVariables = Exact<{
  where: RoleWhereUniqueInput;
}>;


export type RoleDetailQuery = { __typename?: 'Query', findUniqueRole: { __typename?: 'Role', id: string, name: string, description?: string | null } };

export type UpdateRoleMutationVariables = Exact<{
  id: Scalars['String'];
  data: RoleUpdateInput;
}>;


export type UpdateRoleMutation = { __typename?: 'Mutation', updateRole: { __typename?: 'Role', id: string, name: string, description?: string | null } };

export type DeleteRoleMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteRoleMutation = { __typename?: 'Mutation', deleteRole: { __typename?: 'Role', id: string } };

export type CreateRoleMutationVariables = Exact<{
  data: RoleCreateInput;
}>;


export type CreateRoleMutation = { __typename?: 'Mutation', createRole: { __typename?: 'Role', id: string, name: string, description?: string | null } };

export type RoleListQueryVariables = Exact<{
  cursor?: InputMaybe<RoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<RoleScalarFieldEnum> | RoleScalarFieldEnum>;
  orderBy?: InputMaybe<Array<RoleOrderByWithRelationInput> | RoleOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<RoleWhereInput>;
}>;


export type RoleListQuery = { __typename?: 'Query', findManyRoles: Array<{ __typename?: 'Role', id: string, name: string, description?: string | null }> };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['String'];
  data: UserUpdateInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', confirmationCode: string, createdAt: any, email: string, emailConfirmedAt?: any | null, id: string, name?: string | null, roleId: string, updatedAt: any, permissions?: Array<{ __typename?: 'Permission', id: string, tableName: string, operation: PermissionOperation }> | null, role: { __typename?: 'Role', id: string, name: string } } };

export type UserDetailQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type UserDetailQuery = { __typename?: 'Query', findUniqueUser: { __typename?: 'User', confirmationCode: string, createdAt: any, email: string, emailConfirmedAt?: any | null, id: string, name?: string | null, roleId: string, updatedAt: any, permissions?: Array<{ __typename?: 'Permission', id: string, tableName: string, operation: PermissionOperation }> | null, role: { __typename?: 'Role', id: string, name: string } } };

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: { __typename?: 'User', id: string } };

export type CreateUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', confirmationCode: string, createdAt: any, email: string, emailConfirmedAt?: any | null, id: string, name?: string | null, roleId: string, updatedAt: any, permissions?: Array<{ __typename?: 'Permission', id: string, tableName: string, operation: PermissionOperation }> | null, role: { __typename?: 'Role', id: string, name: string } } };

export type UserListQueryVariables = Exact<{
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum> | UserScalarFieldEnum>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput> | UserOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
}>;


export type UserListQuery = { __typename?: 'Query', findManyUsers: Array<{ __typename?: 'User', email: string, emailConfirmedAt?: any | null, id: string, name?: string | null }> };


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
export const PermissionListDocument = gql`
    query PermissionList($cursor: PermissionWhereUniqueInput, $distinct: [PermissionScalarFieldEnum!], $orderBy: [PermissionOrderByWithRelationInput!], $skip: Int, $take: Int, $where: PermissionWhereInput) {
  findManyPermissions(
    cursor: $cursor
    distinct: $distinct
    orderBy: $orderBy
    skip: $skip
    take: $take
    where: $where
  ) {
    id
    operation
    tableName
  }
}
    `;

/**
 * __usePermissionListQuery__
 *
 * To run a query within a React component, call `usePermissionListQuery` and pass it any options that fit your needs.
 * When your component renders, `usePermissionListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePermissionListQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      distinct: // value for 'distinct'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePermissionListQuery(baseOptions?: Apollo.QueryHookOptions<PermissionListQuery, PermissionListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PermissionListQuery, PermissionListQueryVariables>(PermissionListDocument, options);
      }
export function usePermissionListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PermissionListQuery, PermissionListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PermissionListQuery, PermissionListQueryVariables>(PermissionListDocument, options);
        }
export type PermissionListQueryHookResult = ReturnType<typeof usePermissionListQuery>;
export type PermissionListLazyQueryHookResult = ReturnType<typeof usePermissionListLazyQuery>;
export type PermissionListQueryResult = Apollo.QueryResult<PermissionListQuery, PermissionListQueryVariables>;
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
export const RoleDetailDocument = gql`
    query RoleDetail($where: RoleWhereUniqueInput!) {
  findUniqueRole(where: $where) {
    id
    name
    description
  }
}
    `;

/**
 * __useRoleDetailQuery__
 *
 * To run a query within a React component, call `useRoleDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoleDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoleDetailQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRoleDetailQuery(baseOptions: Apollo.QueryHookOptions<RoleDetailQuery, RoleDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RoleDetailQuery, RoleDetailQueryVariables>(RoleDetailDocument, options);
      }
export function useRoleDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RoleDetailQuery, RoleDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RoleDetailQuery, RoleDetailQueryVariables>(RoleDetailDocument, options);
        }
export type RoleDetailQueryHookResult = ReturnType<typeof useRoleDetailQuery>;
export type RoleDetailLazyQueryHookResult = ReturnType<typeof useRoleDetailLazyQuery>;
export type RoleDetailQueryResult = Apollo.QueryResult<RoleDetailQuery, RoleDetailQueryVariables>;
export const UpdateRoleDocument = gql`
    mutation UpdateRole($id: String!, $data: RoleUpdateInput!) {
  updateRole(where: {id: $id}, data: $data) {
    id
    name
    description
  }
}
    `;
export type UpdateRoleMutationFn = Apollo.MutationFunction<UpdateRoleMutation, UpdateRoleMutationVariables>;

/**
 * __useUpdateRoleMutation__
 *
 * To run a mutation, you first call `useUpdateRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRoleMutation, { data, loading, error }] = useUpdateRoleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateRoleMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRoleMutation, UpdateRoleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRoleMutation, UpdateRoleMutationVariables>(UpdateRoleDocument, options);
      }
export type UpdateRoleMutationHookResult = ReturnType<typeof useUpdateRoleMutation>;
export type UpdateRoleMutationResult = Apollo.MutationResult<UpdateRoleMutation>;
export type UpdateRoleMutationOptions = Apollo.BaseMutationOptions<UpdateRoleMutation, UpdateRoleMutationVariables>;
export const DeleteRoleDocument = gql`
    mutation DeleteRole($id: String!) {
  deleteRole(id: $id) {
    id
  }
}
    `;
export type DeleteRoleMutationFn = Apollo.MutationFunction<DeleteRoleMutation, DeleteRoleMutationVariables>;

/**
 * __useDeleteRoleMutation__
 *
 * To run a mutation, you first call `useDeleteRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRoleMutation, { data, loading, error }] = useDeleteRoleMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRoleMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRoleMutation, DeleteRoleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRoleMutation, DeleteRoleMutationVariables>(DeleteRoleDocument, options);
      }
export type DeleteRoleMutationHookResult = ReturnType<typeof useDeleteRoleMutation>;
export type DeleteRoleMutationResult = Apollo.MutationResult<DeleteRoleMutation>;
export type DeleteRoleMutationOptions = Apollo.BaseMutationOptions<DeleteRoleMutation, DeleteRoleMutationVariables>;
export const CreateRoleDocument = gql`
    mutation CreateRole($data: RoleCreateInput!) {
  createRole(data: $data) {
    id
    name
    description
  }
}
    `;
export type CreateRoleMutationFn = Apollo.MutationFunction<CreateRoleMutation, CreateRoleMutationVariables>;

/**
 * __useCreateRoleMutation__
 *
 * To run a mutation, you first call `useCreateRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRoleMutation, { data, loading, error }] = useCreateRoleMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateRoleMutation(baseOptions?: Apollo.MutationHookOptions<CreateRoleMutation, CreateRoleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRoleMutation, CreateRoleMutationVariables>(CreateRoleDocument, options);
      }
export type CreateRoleMutationHookResult = ReturnType<typeof useCreateRoleMutation>;
export type CreateRoleMutationResult = Apollo.MutationResult<CreateRoleMutation>;
export type CreateRoleMutationOptions = Apollo.BaseMutationOptions<CreateRoleMutation, CreateRoleMutationVariables>;
export const RoleListDocument = gql`
    query RoleList($cursor: RoleWhereUniqueInput, $distinct: [RoleScalarFieldEnum!], $orderBy: [RoleOrderByWithRelationInput!], $skip: Int, $take: Int, $where: RoleWhereInput) {
  findManyRoles(
    cursor: $cursor
    distinct: $distinct
    orderBy: $orderBy
    skip: $skip
    take: $take
    where: $where
  ) {
    id
    name
    description
  }
}
    `;

/**
 * __useRoleListQuery__
 *
 * To run a query within a React component, call `useRoleListQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoleListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoleListQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      distinct: // value for 'distinct'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useRoleListQuery(baseOptions?: Apollo.QueryHookOptions<RoleListQuery, RoleListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RoleListQuery, RoleListQueryVariables>(RoleListDocument, options);
      }
export function useRoleListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RoleListQuery, RoleListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RoleListQuery, RoleListQueryVariables>(RoleListDocument, options);
        }
export type RoleListQueryHookResult = ReturnType<typeof useRoleListQuery>;
export type RoleListLazyQueryHookResult = ReturnType<typeof useRoleListLazyQuery>;
export type RoleListQueryResult = Apollo.QueryResult<RoleListQuery, RoleListQueryVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: String!, $data: UserUpdateInput!) {
  updateUser(where: {id: $id}, data: $data) {
    confirmationCode
    createdAt
    email
    emailConfirmedAt
    id
    name
    permissions {
      id
      tableName
      operation
    }
    role {
      id
      name
    }
    roleId
    updatedAt
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UserDetailDocument = gql`
    query UserDetail($where: UserWhereUniqueInput!) {
  findUniqueUser(where: $where) {
    confirmationCode
    createdAt
    email
    emailConfirmedAt
    id
    name
    permissions {
      id
      tableName
      operation
    }
    role {
      id
      name
    }
    roleId
    updatedAt
  }
}
    `;

/**
 * __useUserDetailQuery__
 *
 * To run a query within a React component, call `useUserDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDetailQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserDetailQuery(baseOptions: Apollo.QueryHookOptions<UserDetailQuery, UserDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserDetailQuery, UserDetailQueryVariables>(UserDetailDocument, options);
      }
export function useUserDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserDetailQuery, UserDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserDetailQuery, UserDetailQueryVariables>(UserDetailDocument, options);
        }
export type UserDetailQueryHookResult = ReturnType<typeof useUserDetailQuery>;
export type UserDetailLazyQueryHookResult = ReturnType<typeof useUserDetailLazyQuery>;
export type UserDetailQueryResult = Apollo.QueryResult<UserDetailQuery, UserDetailQueryVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: String!) {
  deleteUser(id: $id) {
    id
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($data: UserCreateInput!) {
  createUser(data: $data) {
    confirmationCode
    createdAt
    email
    emailConfirmedAt
    id
    name
    permissions {
      id
      tableName
      operation
    }
    role {
      id
      name
    }
    roleId
    updatedAt
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UserListDocument = gql`
    query UserList($cursor: UserWhereUniqueInput, $distinct: [UserScalarFieldEnum!], $orderBy: [UserOrderByWithRelationInput!], $skip: Int, $take: Int, $where: UserWhereInput) {
  findManyUsers(
    cursor: $cursor
    distinct: $distinct
    orderBy: $orderBy
    skip: $skip
    take: $take
    where: $where
  ) {
    email
    emailConfirmedAt
    id
    name
  }
}
    `;

/**
 * __useUserListQuery__
 *
 * To run a query within a React component, call `useUserListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserListQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      distinct: // value for 'distinct'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserListQuery(baseOptions?: Apollo.QueryHookOptions<UserListQuery, UserListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserListQuery, UserListQueryVariables>(UserListDocument, options);
      }
export function useUserListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserListQuery, UserListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserListQuery, UserListQueryVariables>(UserListDocument, options);
        }
export type UserListQueryHookResult = ReturnType<typeof useUserListQuery>;
export type UserListLazyQueryHookResult = ReturnType<typeof useUserListLazyQuery>;
export type UserListQueryResult = Apollo.QueryResult<UserListQuery, UserListQueryVariables>;