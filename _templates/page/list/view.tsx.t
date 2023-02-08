---
to: packages/ui/views/<%= h.changeCase.pascal(name) %>ListView.tsx
---
import { Space } from 'antd';
import { SiteLayout } from 'ui/components/common/Layout';
import { <%= h.changeCase.pascal(name) %>List, <%= h.changeCase.pascal(name) %>ListProps } from 'ui/components/<%= h.changeCase.camel(name) %>/list';
import { SearchField, SearchForm } from 'ui/components/common/Search';

export const <%= h.changeCase.pascal(name) %>ListView = (
  p: <%= h.changeCase.pascal(name) %>ListProps & {
    onSearch?: (values: any) => void;
    availableSearchFields: SearchField[];
  },
): JSX.Element => {
  const { onSearch, availableSearchFields, ...rest } = p;
  return (
    <SiteLayout breadCrumbItems={['Home', '<%= h.changeCase.pascal(name) %>']}>
      <Space direction="vertical" style={{ display: 'flex' }}>
        <SearchForm onSearch={onSearch} availableSearchFields={availableSearchFields} />
        <<%= h.changeCase.pascal(name) %>List {...rest} />
      </Space>
    </SiteLayout>
  );
};
