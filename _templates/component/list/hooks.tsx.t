import { DeleteOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { ColumnProps } from 'antd/es/table';
import Link from 'next/link';

import { I<%= h.changeCase.pascal(name) %>List } from './interface';

export const useDatasource = ({
  handleDelete,
}: {
  handleDelete: (id: string) => Promise<void>;
}): ColumnProps<I<%= h.changeCase.pascal(name) %>List>[] => {
  const columns: ColumnProps<I<%= h.changeCase.pascal(name) %>List>[] = [
    {
      title: 'Field',
      dataIndex: 'field',
      key: 'field',
      sorter: true,
      sortDirections: ['ascend', 'descend', 'ascend'],
      render: (field, <%= h.changeCase.camel(name) %>) => (
        <Space size="middle">
          <Link href={`/<%= h.changeCase.camel(name) %>/${<%= h.changeCase.camel(name) %>.id}`}>{field}</Link>
        </Space>
      ),
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
