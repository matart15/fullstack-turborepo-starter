import { Table } from 'antd';
import { ColumnProps } from 'antd/es/table';

import { Role, useDatasource } from './hooks';

export type RoleListProps = {
  roles: Role[];
};
export const RoleList = ({ roles }: { roles: Role[] }): JSX.Element => {
  const columns: ColumnProps<Role>[] = useDatasource();
  return <Table dataSource={roles} columns={columns} pagination={{ pageSize: 10 }} />;
};
