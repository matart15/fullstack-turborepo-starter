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
  PermissionOperation: any;
  timestamp: any;
  timestamptz: any;
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

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "Permission" */
export type Permission = {
  __typename?: 'Permission';
  /** An array relationship */
  _PermissionToRoles: Array<_PermissionToRole>;
  /** An aggregate relationship */
  _PermissionToRoles_aggregate: _PermissionToRole_Aggregate;
  /** An array relationship */
  _PermissionToUsers: Array<_PermissionToUser>;
  /** An aggregate relationship */
  _PermissionToUsers_aggregate: _PermissionToUser_Aggregate;
  id: Scalars['String'];
  operation: Scalars['PermissionOperation'];
  tableName: Scalars['String'];
};


/** columns and relationships of "Permission" */
export type Permission_PermissionToRolesArgs = {
  distinct_on?: InputMaybe<Array<_PermissionToRole_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_PermissionToRole_Order_By>>;
  where?: InputMaybe<_PermissionToRole_Bool_Exp>;
};


/** columns and relationships of "Permission" */
export type Permission_PermissionToRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_PermissionToRole_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_PermissionToRole_Order_By>>;
  where?: InputMaybe<_PermissionToRole_Bool_Exp>;
};


/** columns and relationships of "Permission" */
export type Permission_PermissionToUsersArgs = {
  distinct_on?: InputMaybe<Array<_PermissionToUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_PermissionToUser_Order_By>>;
  where?: InputMaybe<_PermissionToUser_Bool_Exp>;
};


/** columns and relationships of "Permission" */
export type Permission_PermissionToUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_PermissionToUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_PermissionToUser_Order_By>>;
  where?: InputMaybe<_PermissionToUser_Bool_Exp>;
};

/** Boolean expression to compare columns of type "PermissionOperation". All fields are combined with logical 'AND'. */
export type PermissionOperation_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['PermissionOperation']>;
  _gt?: InputMaybe<Scalars['PermissionOperation']>;
  _gte?: InputMaybe<Scalars['PermissionOperation']>;
  _in?: InputMaybe<Array<Scalars['PermissionOperation']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['PermissionOperation']>;
  _lte?: InputMaybe<Scalars['PermissionOperation']>;
  _neq?: InputMaybe<Scalars['PermissionOperation']>;
  _nin?: InputMaybe<Array<Scalars['PermissionOperation']>>;
};

/** aggregated selection of "Permission" */
export type Permission_Aggregate = {
  __typename?: 'Permission_aggregate';
  aggregate?: Maybe<Permission_Aggregate_Fields>;
  nodes: Array<Permission>;
};

/** aggregate fields of "Permission" */
export type Permission_Aggregate_Fields = {
  __typename?: 'Permission_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Permission_Max_Fields>;
  min?: Maybe<Permission_Min_Fields>;
};


/** aggregate fields of "Permission" */
export type Permission_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Permission_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Permission". All fields are combined with a logical 'AND'. */
export type Permission_Bool_Exp = {
  _PermissionToRoles?: InputMaybe<_PermissionToRole_Bool_Exp>;
  _PermissionToRoles_aggregate?: InputMaybe<_PermissionToRole_Aggregate_Bool_Exp>;
  _PermissionToUsers?: InputMaybe<_PermissionToUser_Bool_Exp>;
  _PermissionToUsers_aggregate?: InputMaybe<_PermissionToUser_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Permission_Bool_Exp>>;
  _not?: InputMaybe<Permission_Bool_Exp>;
  _or?: InputMaybe<Array<Permission_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  operation?: InputMaybe<PermissionOperation_Comparison_Exp>;
  tableName?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Permission" */
export const Permission_Constraint = {
  /** unique or primary key constraint on columns "id" */
  PermissionPkey: 'Permission_pkey'
} as const;

export type Permission_Constraint = typeof Permission_Constraint[keyof typeof Permission_Constraint];
/** input type for inserting data into table "Permission" */
export type Permission_Insert_Input = {
  _PermissionToRoles?: InputMaybe<_PermissionToRole_Arr_Rel_Insert_Input>;
  _PermissionToUsers?: InputMaybe<_PermissionToUser_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  operation?: InputMaybe<Scalars['PermissionOperation']>;
  tableName?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Permission_Max_Fields = {
  __typename?: 'Permission_max_fields';
  id?: Maybe<Scalars['String']>;
  operation?: Maybe<Scalars['PermissionOperation']>;
  tableName?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Permission_Min_Fields = {
  __typename?: 'Permission_min_fields';
  id?: Maybe<Scalars['String']>;
  operation?: Maybe<Scalars['PermissionOperation']>;
  tableName?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Permission" */
export type Permission_Mutation_Response = {
  __typename?: 'Permission_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Permission>;
};

/** input type for inserting object relation for remote table "Permission" */
export type Permission_Obj_Rel_Insert_Input = {
  data: Permission_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Permission_On_Conflict>;
};

/** on_conflict condition type for table "Permission" */
export type Permission_On_Conflict = {
  constraint: Permission_Constraint;
  update_columns?: Array<Permission_Update_Column>;
  where?: InputMaybe<Permission_Bool_Exp>;
};

/** Ordering options when selecting data from "Permission". */
export type Permission_Order_By = {
  _PermissionToRoles_aggregate?: InputMaybe<_PermissionToRole_Aggregate_Order_By>;
  _PermissionToUsers_aggregate?: InputMaybe<_PermissionToUser_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  operation?: InputMaybe<Order_By>;
  tableName?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Permission */
export type Permission_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Permission" */
export const Permission_Select_Column = {
  /** column name */
  Id: 'id',
  /** column name */
  Operation: 'operation',
  /** column name */
  TableName: 'tableName'
} as const;

export type Permission_Select_Column = typeof Permission_Select_Column[keyof typeof Permission_Select_Column];
/** input type for updating data in table "Permission" */
export type Permission_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  operation?: InputMaybe<Scalars['PermissionOperation']>;
  tableName?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "Permission" */
export type Permission_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Permission_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Permission_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  operation?: InputMaybe<Scalars['PermissionOperation']>;
  tableName?: InputMaybe<Scalars['String']>;
};

/** update columns of table "Permission" */
export const Permission_Update_Column = {
  /** column name */
  Id: 'id',
  /** column name */
  Operation: 'operation',
  /** column name */
  TableName: 'tableName'
} as const;

export type Permission_Update_Column = typeof Permission_Update_Column[keyof typeof Permission_Update_Column];
export type Permission_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Permission_Set_Input>;
  where: Permission_Bool_Exp;
};

/** columns and relationships of "Role" */
export type Role = {
  __typename?: 'Role';
  /** An array relationship */
  Users: Array<User>;
  /** An aggregate relationship */
  Users_aggregate: User_Aggregate;
  /** An array relationship */
  _PermissionToRoles: Array<_PermissionToRole>;
  /** An aggregate relationship */
  _PermissionToRoles_aggregate: _PermissionToRole_Aggregate;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
};


/** columns and relationships of "Role" */
export type RoleUsersArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


/** columns and relationships of "Role" */
export type RoleUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


/** columns and relationships of "Role" */
export type Role_PermissionToRolesArgs = {
  distinct_on?: InputMaybe<Array<_PermissionToRole_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_PermissionToRole_Order_By>>;
  where?: InputMaybe<_PermissionToRole_Bool_Exp>;
};


/** columns and relationships of "Role" */
export type Role_PermissionToRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_PermissionToRole_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_PermissionToRole_Order_By>>;
  where?: InputMaybe<_PermissionToRole_Bool_Exp>;
};

/** aggregated selection of "Role" */
export type Role_Aggregate = {
  __typename?: 'Role_aggregate';
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

/** aggregate fields of "Role" */
export type Role_Aggregate_Fields = {
  __typename?: 'Role_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
};


/** aggregate fields of "Role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "Role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  Users?: InputMaybe<User_Bool_Exp>;
  Users_aggregate?: InputMaybe<User_Aggregate_Bool_Exp>;
  _PermissionToRoles?: InputMaybe<_PermissionToRole_Bool_Exp>;
  _PermissionToRoles_aggregate?: InputMaybe<_PermissionToRole_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<Role_Bool_Exp>>;
  _not?: InputMaybe<Role_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Role" */
export const Role_Constraint = {
  /** unique or primary key constraint on columns "id" */
  RolePkey: 'Role_pkey'
} as const;

export type Role_Constraint = typeof Role_Constraint[keyof typeof Role_Constraint];
/** input type for inserting data into table "Role" */
export type Role_Insert_Input = {
  Users?: InputMaybe<User_Arr_Rel_Insert_Input>;
  _PermissionToRoles?: InputMaybe<_PermissionToRole_Arr_Rel_Insert_Input>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  __typename?: 'Role_max_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  __typename?: 'Role_min_fields';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "Role" */
export type Role_Mutation_Response = {
  __typename?: 'Role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Role>;
};

/** input type for inserting object relation for remote table "Role" */
export type Role_Obj_Rel_Insert_Input = {
  data: Role_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Role_On_Conflict>;
};

/** on_conflict condition type for table "Role" */
export type Role_On_Conflict = {
  constraint: Role_Constraint;
  update_columns?: Array<Role_Update_Column>;
  where?: InputMaybe<Role_Bool_Exp>;
};

/** Ordering options when selecting data from "Role". */
export type Role_Order_By = {
  Users_aggregate?: InputMaybe<User_Aggregate_Order_By>;
  _PermissionToRoles_aggregate?: InputMaybe<_PermissionToRole_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Role */
export type Role_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "Role" */
export const Role_Select_Column = {
  /** column name */
  Description: 'description',
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name'
} as const;

export type Role_Select_Column = typeof Role_Select_Column[keyof typeof Role_Select_Column];
/** input type for updating data in table "Role" */
export type Role_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "Role" */
export type Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Role_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "Role" */
export const Role_Update_Column = {
  /** column name */
  Description: 'description',
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name'
} as const;

export type Role_Update_Column = typeof Role_Update_Column[keyof typeof Role_Update_Column];
export type Role_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "User" */
export type User = {
  __typename?: 'User';
  /** An object relationship */
  Role: Role;
  /** An array relationship */
  _PermissionToUsers: Array<_PermissionToUser>;
  /** An aggregate relationship */
  _PermissionToUsers_aggregate: _PermissionToUser_Aggregate;
  confirmationCode: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  email: Scalars['String'];
  emailConfirmedAt?: Maybe<Scalars['timestamp']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  roleId: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "User" */
export type User_PermissionToUsersArgs = {
  distinct_on?: InputMaybe<Array<_PermissionToUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_PermissionToUser_Order_By>>;
  where?: InputMaybe<_PermissionToUser_Bool_Exp>;
};


/** columns and relationships of "User" */
export type User_PermissionToUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_PermissionToUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_PermissionToUser_Order_By>>;
  where?: InputMaybe<_PermissionToUser_Bool_Exp>;
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

/** aggregated selection of "User" */
export type User_Aggregate = {
  __typename?: 'User_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

export type User_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Aggregate_Bool_Exp_Count>;
};

export type User_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "User" */
export type User_Aggregate_Fields = {
  __typename?: 'User_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


/** aggregate fields of "User" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "User" */
export type User_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Max_Order_By>;
  min?: InputMaybe<User_Min_Order_By>;
};

/** input type for inserting array relation for remote table "User" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  Role?: InputMaybe<Role_Bool_Exp>;
  _PermissionToUsers?: InputMaybe<_PermissionToUser_Bool_Exp>;
  _PermissionToUsers_aggregate?: InputMaybe<_PermissionToUser_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  confirmationCode?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  emailConfirmedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  roleId?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "User" */
export const User_Constraint = {
  /** unique or primary key constraint on columns "confirmationCode" */
  UserConfirmationCodeKey: 'User_confirmationCode_key',
  /** unique or primary key constraint on columns "email" */
  UserEmailKey: 'User_email_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey: 'User_pkey'
} as const;

export type User_Constraint = typeof User_Constraint[keyof typeof User_Constraint];
/** input type for inserting data into table "User" */
export type User_Insert_Input = {
  Role?: InputMaybe<Role_Obj_Rel_Insert_Input>;
  _PermissionToUsers?: InputMaybe<_PermissionToUser_Arr_Rel_Insert_Input>;
  confirmationCode?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  emailConfirmedAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  roleId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'User_max_fields';
  confirmationCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  emailConfirmedAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  roleId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "User" */
export type User_Max_Order_By = {
  confirmationCode?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailConfirmedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'User_min_fields';
  confirmationCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  emailConfirmedAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  roleId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "User" */
export type User_Min_Order_By = {
  confirmationCode?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailConfirmedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "User" */
export type User_Mutation_Response = {
  __typename?: 'User_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "User" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on_conflict condition type for table "User" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "User". */
export type User_Order_By = {
  Role?: InputMaybe<Role_Order_By>;
  _PermissionToUsers_aggregate?: InputMaybe<_PermissionToUser_Aggregate_Order_By>;
  confirmationCode?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailConfirmedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: User */
export type User_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "User" */
export const User_Select_Column = {
  /** column name */
  ConfirmationCode: 'confirmationCode',
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  Email: 'email',
  /** column name */
  EmailConfirmedAt: 'emailConfirmedAt',
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name',
  /** column name */
  Password: 'password',
  /** column name */
  RoleId: 'roleId',
  /** column name */
  UpdatedAt: 'updatedAt'
} as const;

export type User_Select_Column = typeof User_Select_Column[keyof typeof User_Select_Column];
/** input type for updating data in table "User" */
export type User_Set_Input = {
  confirmationCode?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  emailConfirmedAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  roleId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "User" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  confirmationCode?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  emailConfirmedAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  roleId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "User" */
export const User_Update_Column = {
  /** column name */
  ConfirmationCode: 'confirmationCode',
  /** column name */
  CreatedAt: 'createdAt',
  /** column name */
  Email: 'email',
  /** column name */
  EmailConfirmedAt: 'emailConfirmedAt',
  /** column name */
  Id: 'id',
  /** column name */
  Name: 'name',
  /** column name */
  Password: 'password',
  /** column name */
  RoleId: 'roleId',
  /** column name */
  UpdatedAt: 'updatedAt'
} as const;

export type User_Update_Column = typeof User_Update_Column[keyof typeof User_Update_Column];
export type User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** columns and relationships of "_PermissionToRole" */
export type _PermissionToRole = {
  __typename?: '_PermissionToRole';
  A: Scalars['String'];
  B: Scalars['String'];
  /** An object relationship */
  Permission: Permission;
  /** An object relationship */
  Role: Role;
};

/** aggregated selection of "_PermissionToRole" */
export type _PermissionToRole_Aggregate = {
  __typename?: '_PermissionToRole_aggregate';
  aggregate?: Maybe<_PermissionToRole_Aggregate_Fields>;
  nodes: Array<_PermissionToRole>;
};

export type _PermissionToRole_Aggregate_Bool_Exp = {
  count?: InputMaybe<_PermissionToRole_Aggregate_Bool_Exp_Count>;
};

export type _PermissionToRole_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<_PermissionToRole_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<_PermissionToRole_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "_PermissionToRole" */
export type _PermissionToRole_Aggregate_Fields = {
  __typename?: '_PermissionToRole_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<_PermissionToRole_Max_Fields>;
  min?: Maybe<_PermissionToRole_Min_Fields>;
};


/** aggregate fields of "_PermissionToRole" */
export type _PermissionToRole_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_PermissionToRole_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "_PermissionToRole" */
export type _PermissionToRole_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<_PermissionToRole_Max_Order_By>;
  min?: InputMaybe<_PermissionToRole_Min_Order_By>;
};

/** input type for inserting array relation for remote table "_PermissionToRole" */
export type _PermissionToRole_Arr_Rel_Insert_Input = {
  data: Array<_PermissionToRole_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<_PermissionToRole_On_Conflict>;
};

/** Boolean expression to filter rows from the table "_PermissionToRole". All fields are combined with a logical 'AND'. */
export type _PermissionToRole_Bool_Exp = {
  A?: InputMaybe<String_Comparison_Exp>;
  B?: InputMaybe<String_Comparison_Exp>;
  Permission?: InputMaybe<Permission_Bool_Exp>;
  Role?: InputMaybe<Role_Bool_Exp>;
  _and?: InputMaybe<Array<_PermissionToRole_Bool_Exp>>;
  _not?: InputMaybe<_PermissionToRole_Bool_Exp>;
  _or?: InputMaybe<Array<_PermissionToRole_Bool_Exp>>;
};

/** unique or primary key constraints on table "_PermissionToRole" */
export const _PermissionToRole_Constraint = {
  /** unique or primary key constraint on columns "A", "B" */
  PermissionToRoleAbUnique: '_PermissionToRole_AB_unique'
} as const;

export type _PermissionToRole_Constraint = typeof _PermissionToRole_Constraint[keyof typeof _PermissionToRole_Constraint];
/** input type for inserting data into table "_PermissionToRole" */
export type _PermissionToRole_Insert_Input = {
  A?: InputMaybe<Scalars['String']>;
  B?: InputMaybe<Scalars['String']>;
  Permission?: InputMaybe<Permission_Obj_Rel_Insert_Input>;
  Role?: InputMaybe<Role_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type _PermissionToRole_Max_Fields = {
  __typename?: '_PermissionToRole_max_fields';
  A?: Maybe<Scalars['String']>;
  B?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "_PermissionToRole" */
export type _PermissionToRole_Max_Order_By = {
  A?: InputMaybe<Order_By>;
  B?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type _PermissionToRole_Min_Fields = {
  __typename?: '_PermissionToRole_min_fields';
  A?: Maybe<Scalars['String']>;
  B?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "_PermissionToRole" */
export type _PermissionToRole_Min_Order_By = {
  A?: InputMaybe<Order_By>;
  B?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "_PermissionToRole" */
export type _PermissionToRole_Mutation_Response = {
  __typename?: '_PermissionToRole_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_PermissionToRole>;
};

/** on_conflict condition type for table "_PermissionToRole" */
export type _PermissionToRole_On_Conflict = {
  constraint: _PermissionToRole_Constraint;
  update_columns?: Array<_PermissionToRole_Update_Column>;
  where?: InputMaybe<_PermissionToRole_Bool_Exp>;
};

/** Ordering options when selecting data from "_PermissionToRole". */
export type _PermissionToRole_Order_By = {
  A?: InputMaybe<Order_By>;
  B?: InputMaybe<Order_By>;
  Permission?: InputMaybe<Permission_Order_By>;
  Role?: InputMaybe<Role_Order_By>;
};

/** select columns of table "_PermissionToRole" */
export const _PermissionToRole_Select_Column = {
  /** column name */
  A: 'A',
  /** column name */
  B: 'B'
} as const;

export type _PermissionToRole_Select_Column = typeof _PermissionToRole_Select_Column[keyof typeof _PermissionToRole_Select_Column];
/** input type for updating data in table "_PermissionToRole" */
export type _PermissionToRole_Set_Input = {
  A?: InputMaybe<Scalars['String']>;
  B?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "_PermissionToRole" */
export type _PermissionToRole_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: _PermissionToRole_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type _PermissionToRole_Stream_Cursor_Value_Input = {
  A?: InputMaybe<Scalars['String']>;
  B?: InputMaybe<Scalars['String']>;
};

/** update columns of table "_PermissionToRole" */
export const _PermissionToRole_Update_Column = {
  /** column name */
  A: 'A',
  /** column name */
  B: 'B'
} as const;

export type _PermissionToRole_Update_Column = typeof _PermissionToRole_Update_Column[keyof typeof _PermissionToRole_Update_Column];
export type _PermissionToRole_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<_PermissionToRole_Set_Input>;
  where: _PermissionToRole_Bool_Exp;
};

/** columns and relationships of "_PermissionToUser" */
export type _PermissionToUser = {
  __typename?: '_PermissionToUser';
  A: Scalars['String'];
  B: Scalars['String'];
  /** An object relationship */
  Permission: Permission;
  /** An object relationship */
  User: User;
};

/** aggregated selection of "_PermissionToUser" */
export type _PermissionToUser_Aggregate = {
  __typename?: '_PermissionToUser_aggregate';
  aggregate?: Maybe<_PermissionToUser_Aggregate_Fields>;
  nodes: Array<_PermissionToUser>;
};

export type _PermissionToUser_Aggregate_Bool_Exp = {
  count?: InputMaybe<_PermissionToUser_Aggregate_Bool_Exp_Count>;
};

export type _PermissionToUser_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<_PermissionToUser_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<_PermissionToUser_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "_PermissionToUser" */
export type _PermissionToUser_Aggregate_Fields = {
  __typename?: '_PermissionToUser_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<_PermissionToUser_Max_Fields>;
  min?: Maybe<_PermissionToUser_Min_Fields>;
};


/** aggregate fields of "_PermissionToUser" */
export type _PermissionToUser_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_PermissionToUser_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "_PermissionToUser" */
export type _PermissionToUser_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<_PermissionToUser_Max_Order_By>;
  min?: InputMaybe<_PermissionToUser_Min_Order_By>;
};

/** input type for inserting array relation for remote table "_PermissionToUser" */
export type _PermissionToUser_Arr_Rel_Insert_Input = {
  data: Array<_PermissionToUser_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<_PermissionToUser_On_Conflict>;
};

/** Boolean expression to filter rows from the table "_PermissionToUser". All fields are combined with a logical 'AND'. */
export type _PermissionToUser_Bool_Exp = {
  A?: InputMaybe<String_Comparison_Exp>;
  B?: InputMaybe<String_Comparison_Exp>;
  Permission?: InputMaybe<Permission_Bool_Exp>;
  User?: InputMaybe<User_Bool_Exp>;
  _and?: InputMaybe<Array<_PermissionToUser_Bool_Exp>>;
  _not?: InputMaybe<_PermissionToUser_Bool_Exp>;
  _or?: InputMaybe<Array<_PermissionToUser_Bool_Exp>>;
};

/** unique or primary key constraints on table "_PermissionToUser" */
export const _PermissionToUser_Constraint = {
  /** unique or primary key constraint on columns "A", "B" */
  PermissionToUserAbUnique: '_PermissionToUser_AB_unique'
} as const;

export type _PermissionToUser_Constraint = typeof _PermissionToUser_Constraint[keyof typeof _PermissionToUser_Constraint];
/** input type for inserting data into table "_PermissionToUser" */
export type _PermissionToUser_Insert_Input = {
  A?: InputMaybe<Scalars['String']>;
  B?: InputMaybe<Scalars['String']>;
  Permission?: InputMaybe<Permission_Obj_Rel_Insert_Input>;
  User?: InputMaybe<User_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type _PermissionToUser_Max_Fields = {
  __typename?: '_PermissionToUser_max_fields';
  A?: Maybe<Scalars['String']>;
  B?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "_PermissionToUser" */
export type _PermissionToUser_Max_Order_By = {
  A?: InputMaybe<Order_By>;
  B?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type _PermissionToUser_Min_Fields = {
  __typename?: '_PermissionToUser_min_fields';
  A?: Maybe<Scalars['String']>;
  B?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "_PermissionToUser" */
export type _PermissionToUser_Min_Order_By = {
  A?: InputMaybe<Order_By>;
  B?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "_PermissionToUser" */
export type _PermissionToUser_Mutation_Response = {
  __typename?: '_PermissionToUser_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_PermissionToUser>;
};

/** on_conflict condition type for table "_PermissionToUser" */
export type _PermissionToUser_On_Conflict = {
  constraint: _PermissionToUser_Constraint;
  update_columns?: Array<_PermissionToUser_Update_Column>;
  where?: InputMaybe<_PermissionToUser_Bool_Exp>;
};

/** Ordering options when selecting data from "_PermissionToUser". */
export type _PermissionToUser_Order_By = {
  A?: InputMaybe<Order_By>;
  B?: InputMaybe<Order_By>;
  Permission?: InputMaybe<Permission_Order_By>;
  User?: InputMaybe<User_Order_By>;
};

/** select columns of table "_PermissionToUser" */
export const _PermissionToUser_Select_Column = {
  /** column name */
  A: 'A',
  /** column name */
  B: 'B'
} as const;

export type _PermissionToUser_Select_Column = typeof _PermissionToUser_Select_Column[keyof typeof _PermissionToUser_Select_Column];
/** input type for updating data in table "_PermissionToUser" */
export type _PermissionToUser_Set_Input = {
  A?: InputMaybe<Scalars['String']>;
  B?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "_PermissionToUser" */
export type _PermissionToUser_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: _PermissionToUser_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type _PermissionToUser_Stream_Cursor_Value_Input = {
  A?: InputMaybe<Scalars['String']>;
  B?: InputMaybe<Scalars['String']>;
};

/** update columns of table "_PermissionToUser" */
export const _PermissionToUser_Update_Column = {
  /** column name */
  A: 'A',
  /** column name */
  B: 'B'
} as const;

export type _PermissionToUser_Update_Column = typeof _PermissionToUser_Update_Column[keyof typeof _PermissionToUser_Update_Column];
export type _PermissionToUser_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<_PermissionToUser_Set_Input>;
  where: _PermissionToUser_Bool_Exp;
};

/** ordering argument of a cursor */
export const Cursor_Ordering = {
  /** ascending ordering of the cursor */
  Asc: 'ASC',
  /** descending ordering of the cursor */
  Desc: 'DESC'
} as const;

export type Cursor_Ordering = typeof Cursor_Ordering[keyof typeof Cursor_Ordering];
/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  changePassword: Scalars['Boolean'];
  confirmUserEmail: Scalars['Boolean'];
  /** delete data from the table: "Permission" */
  delete_Permission?: Maybe<Permission_Mutation_Response>;
  /** delete single row from the table: "Permission" */
  delete_Permission_by_pk?: Maybe<Permission>;
  /** delete data from the table: "Role" */
  delete_Role?: Maybe<Role_Mutation_Response>;
  /** delete single row from the table: "Role" */
  delete_Role_by_pk?: Maybe<Role>;
  /** delete data from the table: "User" */
  delete_User?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<User>;
  /** delete data from the table: "_PermissionToRole" */
  delete__PermissionToRole?: Maybe<_PermissionToRole_Mutation_Response>;
  /** delete data from the table: "_PermissionToUser" */
  delete__PermissionToUser?: Maybe<_PermissionToUser_Mutation_Response>;
  /** insert data into the table: "Permission" */
  insert_Permission?: Maybe<Permission_Mutation_Response>;
  /** insert a single row into the table: "Permission" */
  insert_Permission_one?: Maybe<Permission>;
  /** insert data into the table: "Role" */
  insert_Role?: Maybe<Role_Mutation_Response>;
  /** insert a single row into the table: "Role" */
  insert_Role_one?: Maybe<Role>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<User>;
  /** insert data into the table: "_PermissionToRole" */
  insert__PermissionToRole?: Maybe<_PermissionToRole_Mutation_Response>;
  /** insert a single row into the table: "_PermissionToRole" */
  insert__PermissionToRole_one?: Maybe<_PermissionToRole>;
  /** insert data into the table: "_PermissionToUser" */
  insert__PermissionToUser?: Maybe<_PermissionToUser_Mutation_Response>;
  /** insert a single row into the table: "_PermissionToUser" */
  insert__PermissionToUser_one?: Maybe<_PermissionToUser>;
  signInUser: UserSignInResponse;
  signUpUser: Scalars['Boolean'];
  /** update data of the table: "Permission" */
  update_Permission?: Maybe<Permission_Mutation_Response>;
  /** update single row of the table: "Permission" */
  update_Permission_by_pk?: Maybe<Permission>;
  /** update multiples rows of table: "Permission" */
  update_Permission_many?: Maybe<Array<Maybe<Permission_Mutation_Response>>>;
  /** update data of the table: "Role" */
  update_Role?: Maybe<Role_Mutation_Response>;
  /** update single row of the table: "Role" */
  update_Role_by_pk?: Maybe<Role>;
  /** update multiples rows of table: "Role" */
  update_Role_many?: Maybe<Array<Maybe<Role_Mutation_Response>>>;
  /** update data of the table: "User" */
  update_User?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<User>;
  /** update multiples rows of table: "User" */
  update_User_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
  /** update data of the table: "_PermissionToRole" */
  update__PermissionToRole?: Maybe<_PermissionToRole_Mutation_Response>;
  /** update multiples rows of table: "_PermissionToRole" */
  update__PermissionToRole_many?: Maybe<Array<Maybe<_PermissionToRole_Mutation_Response>>>;
  /** update data of the table: "_PermissionToUser" */
  update__PermissionToUser?: Maybe<_PermissionToUser_Mutation_Response>;
  /** update multiples rows of table: "_PermissionToUser" */
  update__PermissionToUser_many?: Maybe<Array<Maybe<_PermissionToUser_Mutation_Response>>>;
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
export type Mutation_RootDelete_PermissionArgs = {
  where: Permission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Permission_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_RoleArgs = {
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Role_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete__PermissionToRoleArgs = {
  where: _PermissionToRole_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__PermissionToUserArgs = {
  where: _PermissionToUser_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsert_PermissionArgs = {
  objects: Array<Permission_Insert_Input>;
  on_conflict?: InputMaybe<Permission_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Permission_OneArgs = {
  object: Permission_Insert_Input;
  on_conflict?: InputMaybe<Permission_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RoleArgs = {
  objects: Array<Role_Insert_Input>;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Role_OneArgs = {
  object: Role_Insert_Input;
  on_conflict?: InputMaybe<Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__PermissionToRoleArgs = {
  objects: Array<_PermissionToRole_Insert_Input>;
  on_conflict?: InputMaybe<_PermissionToRole_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__PermissionToRole_OneArgs = {
  object: _PermissionToRole_Insert_Input;
  on_conflict?: InputMaybe<_PermissionToRole_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__PermissionToUserArgs = {
  objects: Array<_PermissionToUser_Insert_Input>;
  on_conflict?: InputMaybe<_PermissionToUser_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__PermissionToUser_OneArgs = {
  object: _PermissionToUser_Insert_Input;
  on_conflict?: InputMaybe<_PermissionToUser_On_Conflict>;
};


/** mutation root */
export type Mutation_RootSignInUserArgs = {
  data: UserSignInInput;
};


/** mutation root */
export type Mutation_RootSignUpUserArgs = {
  data: UserSignUpInput;
};


/** mutation root */
export type Mutation_RootUpdate_PermissionArgs = {
  _set?: InputMaybe<Permission_Set_Input>;
  where: Permission_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Permission_By_PkArgs = {
  _set?: InputMaybe<Permission_Set_Input>;
  pk_columns: Permission_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Permission_ManyArgs = {
  updates: Array<Permission_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RoleArgs = {
  _set?: InputMaybe<Role_Set_Input>;
  where: Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Role_By_PkArgs = {
  _set?: InputMaybe<Role_Set_Input>;
  pk_columns: Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Role_ManyArgs = {
  updates: Array<Role_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate__PermissionToRoleArgs = {
  _set?: InputMaybe<_PermissionToRole_Set_Input>;
  where: _PermissionToRole_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__PermissionToRole_ManyArgs = {
  updates: Array<_PermissionToRole_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate__PermissionToUserArgs = {
  _set?: InputMaybe<_PermissionToUser_Set_Input>;
  where: _PermissionToUser_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__PermissionToUser_ManyArgs = {
  updates: Array<_PermissionToUser_Updates>;
};

/** column ordering options */
export const Order_By = {
  /** in ascending order, nulls last */
  Asc: 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst: 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast: 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc: 'desc',
  /** in descending order, nulls first */
  DescNullsFirst: 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast: 'desc_nulls_last'
} as const;

export type Order_By = typeof Order_By[keyof typeof Order_By];
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Permission" */
  Permission: Array<Permission>;
  /** fetch aggregated fields from the table: "Permission" */
  Permission_aggregate: Permission_Aggregate;
  /** fetch data from the table: "Permission" using primary key columns */
  Permission_by_pk?: Maybe<Permission>;
  /** fetch data from the table: "Role" */
  Role: Array<Role>;
  /** fetch aggregated fields from the table: "Role" */
  Role_aggregate: Role_Aggregate;
  /** fetch data from the table: "Role" using primary key columns */
  Role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table: "_PermissionToRole" */
  _PermissionToRole: Array<_PermissionToRole>;
  /** fetch aggregated fields from the table: "_PermissionToRole" */
  _PermissionToRole_aggregate: _PermissionToRole_Aggregate;
  /** fetch data from the table: "_PermissionToUser" */
  _PermissionToUser: Array<_PermissionToUser>;
  /** fetch aggregated fields from the table: "_PermissionToUser" */
  _PermissionToUser_aggregate: _PermissionToUser_Aggregate;
  currentUser: CurrentUserResponse;
  sayHello: Scalars['String'];
};


export type Query_RootPermissionArgs = {
  distinct_on?: InputMaybe<Array<Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Permission_Order_By>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};


export type Query_RootPermission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Permission_Order_By>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};


export type Query_RootPermission_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_Root_PermissionToRoleArgs = {
  distinct_on?: InputMaybe<Array<_PermissionToRole_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_PermissionToRole_Order_By>>;
  where?: InputMaybe<_PermissionToRole_Bool_Exp>;
};


export type Query_Root_PermissionToRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_PermissionToRole_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_PermissionToRole_Order_By>>;
  where?: InputMaybe<_PermissionToRole_Bool_Exp>;
};


export type Query_Root_PermissionToUserArgs = {
  distinct_on?: InputMaybe<Array<_PermissionToUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_PermissionToUser_Order_By>>;
  where?: InputMaybe<_PermissionToUser_Bool_Exp>;
};


export type Query_Root_PermissionToUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_PermissionToUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_PermissionToUser_Order_By>>;
  where?: InputMaybe<_PermissionToUser_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Permission" */
  Permission: Array<Permission>;
  /** fetch aggregated fields from the table: "Permission" */
  Permission_aggregate: Permission_Aggregate;
  /** fetch data from the table: "Permission" using primary key columns */
  Permission_by_pk?: Maybe<Permission>;
  /** fetch data from the table in a streaming manner: "Permission" */
  Permission_stream: Array<Permission>;
  /** fetch data from the table: "Role" */
  Role: Array<Role>;
  /** fetch aggregated fields from the table: "Role" */
  Role_aggregate: Role_Aggregate;
  /** fetch data from the table: "Role" using primary key columns */
  Role_by_pk?: Maybe<Role>;
  /** fetch data from the table in a streaming manner: "Role" */
  Role_stream: Array<Role>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: User_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "User" */
  User_stream: Array<User>;
  /** fetch data from the table: "_PermissionToRole" */
  _PermissionToRole: Array<_PermissionToRole>;
  /** fetch aggregated fields from the table: "_PermissionToRole" */
  _PermissionToRole_aggregate: _PermissionToRole_Aggregate;
  /** fetch data from the table in a streaming manner: "_PermissionToRole" */
  _PermissionToRole_stream: Array<_PermissionToRole>;
  /** fetch data from the table: "_PermissionToUser" */
  _PermissionToUser: Array<_PermissionToUser>;
  /** fetch aggregated fields from the table: "_PermissionToUser" */
  _PermissionToUser_aggregate: _PermissionToUser_Aggregate;
  /** fetch data from the table in a streaming manner: "_PermissionToUser" */
  _PermissionToUser_stream: Array<_PermissionToUser>;
};


export type Subscription_RootPermissionArgs = {
  distinct_on?: InputMaybe<Array<Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Permission_Order_By>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};


export type Subscription_RootPermission_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Permission_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Permission_Order_By>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};


export type Subscription_RootPermission_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootPermission_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Permission_Stream_Cursor_Input>>;
  where?: InputMaybe<Permission_Bool_Exp>;
};


export type Subscription_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRole_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Role_Stream_Cursor_Input>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_Root_PermissionToRoleArgs = {
  distinct_on?: InputMaybe<Array<_PermissionToRole_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_PermissionToRole_Order_By>>;
  where?: InputMaybe<_PermissionToRole_Bool_Exp>;
};


export type Subscription_Root_PermissionToRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_PermissionToRole_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_PermissionToRole_Order_By>>;
  where?: InputMaybe<_PermissionToRole_Bool_Exp>;
};


export type Subscription_Root_PermissionToRole_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<_PermissionToRole_Stream_Cursor_Input>>;
  where?: InputMaybe<_PermissionToRole_Bool_Exp>;
};


export type Subscription_Root_PermissionToUserArgs = {
  distinct_on?: InputMaybe<Array<_PermissionToUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_PermissionToUser_Order_By>>;
  where?: InputMaybe<_PermissionToUser_Bool_Exp>;
};


export type Subscription_Root_PermissionToUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_PermissionToUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_PermissionToUser_Order_By>>;
  where?: InputMaybe<_PermissionToUser_Bool_Exp>;
};


export type Subscription_Root_PermissionToUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<_PermissionToUser_Stream_Cursor_Input>>;
  where?: InputMaybe<_PermissionToUser_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
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

export type PermissionListQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Permission_Select_Column> | Permission_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Permission_Order_By> | Permission_Order_By>;
  where?: InputMaybe<Permission_Bool_Exp>;
}>;


export type PermissionListQuery = { __typename?: 'query_root', Permission: Array<{ __typename?: 'Permission', id: string, operation: any, tableName: string }> };

export type PermissionDetailQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type PermissionDetailQuery = { __typename?: 'query_root', Permission_by_pk?: { __typename?: 'Permission', id: string, operation: any, tableName: string } | null };

export type RoleListQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<Role_Select_Column> | Role_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Role_Order_By> | Role_Order_By>;
  where?: InputMaybe<Role_Bool_Exp>;
}>;


export type RoleListQuery = { __typename?: 'query_root', Role: Array<{ __typename?: 'Role', name: string, id: string, description?: string | null }> };

export type RoleDetailQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type RoleDetailQuery = { __typename?: 'query_root', Role_by_pk?: { __typename?: 'Role', description?: string | null, id: string, name: string } | null };

export type UserListQueryVariables = Exact<{
  distinct_on?: InputMaybe<Array<User_Select_Column> | User_Select_Column>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By> | User_Order_By>;
  where?: InputMaybe<User_Bool_Exp>;
}>;


export type UserListQuery = { __typename?: 'query_root', User: Array<{ __typename?: 'User', email: string, emailConfirmedAt?: any | null, id: string, name?: string | null }> };

export type UserDetailQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type UserDetailQuery = { __typename?: 'query_root', User_by_pk?: { __typename?: 'User', email: string, emailConfirmedAt?: any | null, id: string, name?: string | null, Role: { __typename?: 'Role', id: string, name: string, description?: string | null }, _PermissionToUsers: Array<{ __typename?: '_PermissionToUser', Permission: { __typename?: 'Permission', id: string, operation: any, tableName: string } }> } | null };


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
export const PermissionListDocument = gql`
    query PermissionList($distinct_on: [Permission_select_column!], $limit: Int, $offset: Int, $order_by: [Permission_order_by!], $where: Permission_bool_exp) {
  Permission(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
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
 *      distinct_on: // value for 'distinct_on'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
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
export const PermissionDetailDocument = gql`
    query PermissionDetail($id: String!) {
  Permission_by_pk(id: $id) {
    id
    operation
    tableName
  }
}
    `;

/**
 * __usePermissionDetailQuery__
 *
 * To run a query within a React component, call `usePermissionDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `usePermissionDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePermissionDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePermissionDetailQuery(baseOptions: Apollo.QueryHookOptions<PermissionDetailQuery, PermissionDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PermissionDetailQuery, PermissionDetailQueryVariables>(PermissionDetailDocument, options);
      }
export function usePermissionDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PermissionDetailQuery, PermissionDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PermissionDetailQuery, PermissionDetailQueryVariables>(PermissionDetailDocument, options);
        }
export type PermissionDetailQueryHookResult = ReturnType<typeof usePermissionDetailQuery>;
export type PermissionDetailLazyQueryHookResult = ReturnType<typeof usePermissionDetailLazyQuery>;
export type PermissionDetailQueryResult = Apollo.QueryResult<PermissionDetailQuery, PermissionDetailQueryVariables>;
export const RoleListDocument = gql`
    query RoleList($distinct_on: [Role_select_column!], $limit: Int, $offset: Int, $order_by: [Role_order_by!], $where: Role_bool_exp) {
  Role(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
    where: $where
  ) {
    name
    id
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
 *      distinct_on: // value for 'distinct_on'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
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
export const RoleDetailDocument = gql`
    query RoleDetail($id: String!) {
  Role_by_pk(id: $id) {
    description
    id
    name
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
 *      id: // value for 'id'
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
export const UserListDocument = gql`
    query UserList($distinct_on: [User_select_column!], $limit: Int, $offset: Int, $order_by: [User_order_by!], $where: User_bool_exp) {
  User(
    distinct_on: $distinct_on
    limit: $limit
    offset: $offset
    order_by: $order_by
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
 *      distinct_on: // value for 'distinct_on'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      order_by: // value for 'order_by'
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
export const UserDetailDocument = gql`
    query UserDetail($id: String!) {
  User_by_pk(id: $id) {
    Role {
      id
      name
      description
    }
    _PermissionToUsers {
      Permission {
        id
        operation
        tableName
      }
    }
    email
    emailConfirmedAt
    id
    name
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
 *      id: // value for 'id'
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