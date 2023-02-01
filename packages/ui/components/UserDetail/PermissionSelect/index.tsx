import { Select } from 'antd';

export type Permission = {
  id: string;
  name: string;
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
          label: permission.name,
          value: permission.id,
        })) || []
      }
    />
  );
};
