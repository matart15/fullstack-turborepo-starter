import { Table } from 'antd';
import { ColumnProps } from 'antd/es/table';
import { useRouter } from 'next/router';
import { PaginationType } from 'ui/types/pagination';

import { useDatasource } from './hooks';
import { IUserList } from './interface';

export type UserListProps = {
  users: IUserList[];
  handleDelete: (id: string) => Promise<void>;
  pagination?: false | PaginationType;
};
export const UserList = ({ users, handleDelete, pagination = false }: UserListProps): JSX.Element => {
  const router = useRouter();
  const columns: ColumnProps<IUserList>[] = useDatasource({ handleDelete });

  const handleTableChange = (pagination1, filters, sorter): void => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        page: pagination1.current,
        orderField: sorter.field,
        orderDirection: sorter.order,
        ...filters,
      },
    });
  };

  return (
    <Table rowKey="id" dataSource={users} columns={columns} pagination={pagination} onChange={handleTableChange} />
  );
};
