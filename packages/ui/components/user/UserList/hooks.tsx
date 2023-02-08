import { DeleteOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { ColumnProps } from 'antd/es/table';
import Link from 'next/link';

import { IUserList } from './interface';

export const useDatasource = ({
  handleDelete,
}: {
  handleDelete: (id: string) => Promise<void>;
}): ColumnProps<IUserList>[] => {
  const columns: ColumnProps<IUserList>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: true,
      sortDirections: ['ascend', 'descend', 'ascend'],
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: true,
      sortDirections: ['ascend', 'descend', 'ascend'],
      render: (email, user) => (
        <Space size="middle">
          <Link href={`/user/${user.id}`}>{email}</Link>
        </Space>
      ),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Permissions',
      dataIndex: 'permissions',
      key: 'permissions',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      defaultSortOrder: 'descend',
      sorter: true,
      sortDirections: ['ascend', 'descend', 'ascend'],
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
