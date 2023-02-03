---
to: packages/ui/components/<%= h.changeCase.pascal(name) %>/list/hooks.tsx
---
import { DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Input, Row, Space } from 'antd';
import { ColumnProps } from 'antd/es/table';
import { FilterDropdownProps } from 'antd/es/table/interface';
import Link from 'next/link';
import { useState } from 'react';

const { Search } = Input;

export type <%= h.changeCase.pascal(name) %> = {
  field: string;
};
export const useDatasource = ({
  handleDelete,
}: {
  handleDelete: (id: string) => Promise<void>;
}): ColumnProps<<%= h.changeCase.pascal(name) %>>[] => {
  const [searchedColumn, setSearchedColumn] = useState('');

  const handleSearch = (confirm, dataIndex): void => {
    confirm();
    setSearchedColumn(dataIndex);
  };

  const getColumnSearchProps = (
    dataIndex,
  ): {
    filterDropdown: (props: FilterDropdownProps) => JSX.Element;
    filterIcon: (filtered: boolean) => JSX.Element;
    onFilter: (value: string, record: <%= h.changeCase.pascal(name) %>) => boolean;
    render: (text: string) => JSX.Element;
  } => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: FilterDropdownProps) => (
      <Row style={{ padding: 8 }}>
        <Search
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e): void => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onSearch={(): void => handleSearch(confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={(): void => handleSearch(confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}>
          Search
        </Button>
        <Button onClick={clearFilters} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </Row>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) => record[dataIndex]?.toString().toLowerCase().includes(value.toLowerCase()),
    render: (text): JSX.Element => (searchedColumn === dataIndex ? <> {text}</> : <> {text}</>),
  });
  const columns: ColumnProps<<%= h.changeCase.pascal(name) %>>[] = [
    {
      title: 'Field',
      dataIndex: 'field',
      key: 'field',
      sorter: (a, b) => a.field.localeCompare(b.field),
      sortDirections: ['ascend', 'descend'],
      ...getColumnSearchProps('field'),
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
      render: id => <Button danger type="link" onClick={() => handleDelete(id)} icon={<DeleteOutlined />} />,
    },
  ];
  return columns;
};
