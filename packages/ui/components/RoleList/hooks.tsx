import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Row, Space } from 'antd';
import { ColumnProps } from 'antd/es/table';
import { FilterDropdownProps } from 'antd/es/table/interface';
import Link from 'next/link';
import { useState } from 'react';

const { Search } = Input;

export type Role = {
  id: string;
  name: string;
  description?: string | null;
};
export const useDatasource = (): ColumnProps<Role>[] => {
  const [searchedColumn, setSearchedColumn] = useState('');

  const handleSearch = (confirm, dataIndex): void => {
    confirm();
    setSearchedColumn(dataIndex);
  };

  const getColumnSearchProps = (
    dataIndex,
  ): {
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: FilterDropdownProps) => JSX.Element;
    filterIcon: (filtered: boolean) => JSX.Element;
    onFilter: (value: string, record: Role) => boolean;
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
  const columns: ColumnProps<Role>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      sorter: (a, b) => a.description?.localeCompare(b.description),
      sortDirections: ['ascend', 'descend'],
      ...getColumnSearchProps('description'),
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex: 'id',
      render: id => (
        <Space size="middle">
          <Link href={`/role/${id}`}>Detail</Link>
        </Space>
      ),
    },
  ];
  return columns;
};
