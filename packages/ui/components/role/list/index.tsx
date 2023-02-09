import { Table } from 'antd';
import { ColumnProps } from 'antd/es/table';
import { useRouter } from 'next/router';
import { PaginationType } from 'ui/types/pagination';

import { useDatasource } from './hooks';
import { IRoleList } from './interface';

export type RoleListProps = {
  roles: IRoleList[];
  handleDelete: (id: string) => Promise<void>;
  pagination?: false | PaginationType;
};
export const RoleList = ({ roles, handleDelete, pagination = false }: RoleListProps): JSX.Element => {
  const router = useRouter();
  const columns: ColumnProps<IRoleList>[] = useDatasource({ handleDelete });

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
    <Table rowKey="id" dataSource={roles} columns={columns} pagination={pagination} onChange={handleTableChange} />
  );
};
