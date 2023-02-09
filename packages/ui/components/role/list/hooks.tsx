import { DeleteOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { ColumnProps } from 'antd/es/table';
import Link from 'next/link';

import { IRoleList } from './interface';

export const useDatasource = ({
  handleDelete,
}: {
  handleDelete: (id: string) => Promise<void>;
}): ColumnProps<IRoleList>[] => {
  const columns: ColumnProps<IRoleList>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: true,
      sortDirections: ['ascend', 'descend', 'ascend'],
      render: (name, role) => (
        <Space size="middle">
          <Link href={`/role/${role.id}`}>{name}</Link>
        </Space>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Actions',
      key: 'actions',
      dataIndex: 'id',
      render: (id): JSX.Element => (
        <Button danger type="link" onClick={(): Promise<void> => handleDelete(id)} icon={<DeleteOutlined />} />
      ),
    },
  ];
  return columns;
};
