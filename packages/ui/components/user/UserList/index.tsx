import { Table } from 'antd';
import { ColumnProps } from 'antd/es/table';

import { useDatasource } from './hooks';
import { IUserList } from './interface';

export type UserListProps = {
  users: IUserList[];
  handleDelete: (id: string) => Promise<void>;
};
export const UserList = ({ users, handleDelete }: UserListProps): JSX.Element => {
  const columns: ColumnProps<IUserList>[] = useDatasource({ handleDelete });
  return <Table dataSource={users} columns={columns} pagination={{ pageSize: 10 }} />;
};
