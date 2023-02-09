---
to: packages/ui/views/<%= h.changeCase.pascal(name) %>ListView.tsx
---
import { Button, Space } from 'antd';
import { useRouter } from 'next/router';
import { SiteLayout } from 'ui/components/common/Layout';
import { SearchField, SearchForm } from 'ui/components/common/Search';
import { <%= h.changeCase.pascal(name) %>List, <%= h.changeCase.pascal(name) %>ListProps } from 'ui/components/<%= h.changeCase.camel(name) %>/list';

export const <%= h.changeCase.pascal(name) %>ListView = (
  p: <%= h.changeCase.pascal(name) %>ListProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSearch?: (values: any) => void;
    availableSearchFields: SearchField[];
  },
): JSX.Element => {
  const { onSearch, availableSearchFields, ...rest } = p;
  const router = useRouter();

  const handleAddButtonClick = (): void => {
    router.push('/<%= h.changeCase.camel(name) %>/new');
  };
  return (
    <SiteLayout breadCrumbItems={['Home', '<%= h.changeCase.pascal(name) %>']}>
      <Space direction="vertical" style={{ display: 'flex' }}>
        <SearchForm onSearch={onSearch} availableSearchFields={availableSearchFields} />
        <Button type="primary" onClick={handleAddButtonClick}>
          New
        </Button>
        <<%= h.changeCase.pascal(name) %>List {...rest} />
      </Space>
    </SiteLayout>
  );
};
