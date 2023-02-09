import { Button, Space } from 'antd';
import { useRouter } from 'next/router';
import { SiteLayout } from 'ui/components/common/Layout';
import { SearchField, SearchForm } from 'ui/components/common/Search';
import { UserList, UserListProps } from 'ui/components/user/list';

export const UserListView = (
  p: UserListProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSearch?: (values: any) => void;
    availableSearchFields: SearchField[];
  },
): JSX.Element => {
  const { onSearch, availableSearchFields, ...rest } = p;
  const router = useRouter();

  const handleAddButtonClick = (): void => {
    router.push('/user/new');
  };
  return (
    <SiteLayout breadCrumbItems={['Home', 'User']}>
      <Space direction="vertical" style={{ display: 'flex' }}>
        <SearchForm onSearch={onSearch} availableSearchFields={availableSearchFields} />
        <Button type="primary" onClick={handleAddButtonClick}>
          New
        </Button>
        <UserList {...rest} />
      </Space>
    </SiteLayout>
  );
};
