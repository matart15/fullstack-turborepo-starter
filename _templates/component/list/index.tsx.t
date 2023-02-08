---
to: packages/ui/components/<%= h.changeCase.camel(name) %>/list/index.tsx
---
import { Table } from 'antd';
import { ColumnProps } from 'antd/es/table';
import { useRouter } from 'next/router';
import { PaginationType } from 'ui/types/pagination';

import { useDatasource } from './hooks';
import { I<%= h.changeCase.pascal(name) %>List } from './interface';

export type <%= h.changeCase.pascal(name) %>ListProps = {
  <%= h.changeCase.camel(name) %>s: I<%= h.changeCase.pascal(name) %>List[];
  handleDelete: (id: string) => Promise<void>;
  pagination?: false | PaginationType;
};
export const <%= h.changeCase.pascal(name) %>List = ({ <%= h.changeCase.camel(name) %>s, handleDelete, pagination = false }: <%= h.changeCase.pascal(name) %>ListProps): JSX.Element => {
  const router = useRouter();
  const columns: ColumnProps<I<%= h.changeCase.pascal(name) %>List>[] = useDatasource({ handleDelete });

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
    <Table rowKey="id" dataSource={<%= h.changeCase.camel(name) %>s} columns={columns} pagination={pagination} onChange={handleTableChange} />
  );
};
