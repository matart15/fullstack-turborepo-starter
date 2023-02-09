import { Button, Space } from 'antd';
import { useRouter } from 'next/router';
import { SiteLayout } from 'ui/components/common/Layout';
import { SearchField, SearchForm } from 'ui/components/common/Search';
import { RoleList, RoleListProps } from 'ui/components/role/list';

export const RoleListView = (
  p: RoleListProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSearch?: (values: any) => void;
    availableSearchFields: SearchField[];
  },
): JSX.Element => {
  const { onSearch, availableSearchFields, ...rest } = p;
  const router = useRouter();

  const handleAddButtonClick = (): void => {
    router.push('/role/new');
  };
  return (
    <SiteLayout breadCrumbItems={['Home', 'Role']}>
      <Space direction="vertical" style={{ display: 'flex' }}>
        <SearchForm onSearch={onSearch} availableSearchFields={availableSearchFields} />
        <Button type="primary" onClick={handleAddButtonClick}>
          New
        </Button>
        <RoleList {...rest} />
      </Space>
    </SiteLayout>
  );
};
