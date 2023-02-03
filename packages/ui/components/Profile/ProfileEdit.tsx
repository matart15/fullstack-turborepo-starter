import { DatePicker, Form, Input, Typography } from 'antd';
import dayjs from 'dayjs';

import { User } from '../user/UserList/hooks';

const formatDate = (date: string | number | Date): dayjs.Dayjs => {
  return dayjs(date);
};

const { Title } = Typography;

export const ProfileEdit = ({ user }: { user: User }): JSX.Element => {
  return (
    <Form labelCol={{ span: 8, offset: 0 }} labelAlign="left" wrapperCol={{ span: 16 }}>
      <Title level={3}>Profile</Title>
      <Form.Item label="ID">
        <Input value={user.id} disabled />
      </Form.Item>
      <Form.Item label="Created At">
        <DatePicker value={formatDate(user.createdAt)} disabled />
      </Form.Item>
      <Form.Item label="Updated At">
        <DatePicker value={formatDate(user.updatedAt)} disabled />
      </Form.Item>
      <Form.Item label="Email">
        <Input value={user.email} disabled />
      </Form.Item>
      <Form.Item label="Name">
        <Input value={user.name} disabled />
      </Form.Item>
      <Form.Item label="Email Confirmed At">
        <DatePicker value={formatDate(user.emailConfirmedAt)} disabled />
      </Form.Item>
      <Form.Item label="Confirmation Code">
        <Input value={user.confirmationCode} disabled />
      </Form.Item>
    </Form>
  );
};
