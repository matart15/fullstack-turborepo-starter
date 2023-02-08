import { Button, DatePicker, Empty, Form, Input, Typography } from 'antd';
import dayjs from 'dayjs';

import { IUserEdit } from './interface';
import { Permission, PermissionsSelect } from './PermissionSelect';

const formatDate = (date: string | number | Date): dayjs.Dayjs => {
  return dayjs(date);
};

const { Title } = Typography;
export type UserEditProps = {
  user?: IUserEdit | null;
  onFinish: (values: IUserEdit) => Promise<void>;
  allPermissions: Permission[];
  editMode?: boolean;
};
export const UserEdit = ({ user, onFinish, allPermissions, editMode }: UserEditProps): JSX.Element => {
  if (!user) return <Empty />;
  return (
    <Form
      initialValues={{
        ...user,
        emailConfirmedAt: formatDate(user.emailConfirmedAt),
        createdAt: formatDate(user.createdAt),
        updatedAt: formatDate(user.updatedAt),
      }}
      labelCol={{ span: 8, offset: 0 }}
      labelAlign="left"
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      disabled={!editMode}>
      <Title level={3}>Profile</Title>
      <Form.Item label="ID" name="id">
        <Input />
      </Form.Item>
      <Form.Item label="Created At" name="createdAt">
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Updated At" name="updatedAt">
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input />
      </Form.Item>
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="Email Confirmed At" name="emailConfirmedAt">
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Confirmation Code" name="confirmationCode">
        <Input />
      </Form.Item>
      <Form.Item label="Permissions" name="user.permissions">
        <PermissionsSelect permissions={allPermissions} defaultValue={user.permissions} />
      </Form.Item>
      {editMode ? (
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      ) : undefined}
    </Form>
  );
};
