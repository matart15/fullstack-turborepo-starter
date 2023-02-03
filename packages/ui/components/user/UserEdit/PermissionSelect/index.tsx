import { Select } from 'antd';

export type Permission = {
  id: string;
  tableName: string;
  operation: string;
};

export const PermissionsSelect = ({
  permissions,
  onChange,
  defaultValue,
}: {
  permissions: Permission[];
  onChange?: (value: Permission) => void;
  defaultValue?: string | string[] | Permission;
}): JSX.Element => {
  return (
    <Select
      mode="multiple"
      showSearch
      placeholder="Select a permission"
      optionFilterProp="children"
      defaultValue={defaultValue}
      onChange={onChange}
      filterOption={(input, option): boolean => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
      options={
        permissions?.map(permission => ({
          label: `${permission.tableName}:${permission.operation}`,
          value: permission.id,
        })) || []
      }
    />
  );
};
