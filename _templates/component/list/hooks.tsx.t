---
to: packages/ui/components/<%= h.changeCase.camel(name) %>/list/hooks.tsx
---
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
      dataIndex: 'customField',
      key: 'customField',
      sorter: true,
      sortDirections: ['ascend', 'descend', 'ascend'],
      render: (customField, <%= h.changeCase.camel(name) %>) => (
        <Space size="middle">
          <Link href={`/<%= h.changeCase.camel(name) %>/${<%= h.changeCase.camel(name) %>.id}`}>{customField}</Link>
        </Space>
      ),
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
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
