import { DatePicker, Form, Input, Typography } from 'antd';
import { IUserEdit } from 'ui/components/user/form/interface';
import { formatDate } from 'ui/utils/formatDate';

const { Title } = Typography;

export const ProfileEdit = ({ user }: { user: IUserEdit }): JSX.Element => {
  return (
    <Form labelCol={{ span: 8, offset: 0 }} labelAlign="left" wrapperCol={{ span: 16 }}>
      <Title level={3}>Profile</Title>
      <Form.Item label="ID">
        <Input value={user.id} disabled />
      </Form.Item>
      <Form.Item label="Created At">
        <DatePicker value={formatDate(user.createdAt)} disabled style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Updated At">
        <DatePicker value={formatDate(user.updatedAt)} disabled style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Email">
        <Input value={user.email} disabled />
      </Form.Item>
      <Form.Item label="Name">
        <Input value={user.name} disabled />
      </Form.Item>
      <Form.Item label="Email Confirmed At">
        <DatePicker value={formatDate(user.emailConfirmedAt)} disabled style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Confirmation Code">
        <Input value={user.confirmationCode} disabled />
      </Form.Item>
    </Form>
  );
};
