---
to: packages/ui/components/<%= h.changeCase.pascal(name) %>/list/index.tsx
---
import { Table } from 'antd';
import { ColumnProps } from 'antd/es/table';
import { I<%= h.changeCase.pascal(name) %>List } from './interface';

import { useDatasource } from './hooks';

export type <%= h.changeCase.pascal(name) %>ListProps = {
  <%= h.changeCase.camel(name) %>s: I<%= h.changeCase.pascal(name) %>List[];
  handleDelete: (id: string) => Promise<void>;
};
export const <%= h.changeCase.pascal(name) %>List = ({ <%= h.changeCase.camel(name) %>s, handleDelete }: <%= h.changeCase.pascal(name) %>ListProps): JSX.Element => {
  const columns: ColumnProps<I<%= h.changeCase.pascal(name) %>List>[] = useDatasource({ handleDelete });
  return <Table dataSource={<%= h.changeCase.camel(name) %>s} columns={columns} pagination={{ pageSize: 10 }} />;
};
