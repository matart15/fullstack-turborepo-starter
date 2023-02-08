import { Space } from 'antd';
import { SiteLayout } from 'ui/components/common/Layout';
import { SearchField, SearchForm } from 'ui/components/common/Search';
import { UserList, UserListProps } from 'ui/components/user/UserList';

export const UserListView = (
  p: UserListProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSearch?: (values: any) => void;
    availableSearchFields: SearchField[];
  },
): JSX.Element => {
  const { onSearch, availableSearchFields, ...rest } = p;
  return (
    <SiteLayout breadCrumbItems={['Home', 'User']}>
      <Space direction="vertical" style={{ display: 'flex' }}>
        <SearchForm onSearch={onSearch} availableSearchFields={availableSearchFields} />
        <UserList {...rest} />
      </Space>
    </SiteLayout>
  );
};
