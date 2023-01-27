import { Table } from 'antd';
import { ColumnProps } from 'antd/es/table';

import { useDatasource, User } from './hooks';

export type UserListProps = {
  users: User[];
};
export const UserList = ({ users }: UserListProps): JSX.Element => {
  const columns: ColumnProps<User>[] = useDatasource();
  return <Table dataSource={users} columns={columns} pagination={{ pageSize: 10 }} />;
};
