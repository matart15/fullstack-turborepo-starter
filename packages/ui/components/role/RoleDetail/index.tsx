import { Empty, Form, Input, Typography } from 'antd';

import { Role } from '../RoleList/hooks';

const { Title } = Typography;
export const RoleDetail = ({ role }: { role?: Role | null }): JSX.Element => {
  if (!role) return <Empty />;
  return (
    <Form labelCol={{ span: 8, offset: 0 }} labelAlign="left" wrapperCol={{ span: 16 }}>
      <Title level={3}>Profile</Title>
      <Form.Item label="ID">
        <Input value={role.id} disabled />
      </Form.Item>
      <Form.Item label="Name">
        <Input value={role.name} disabled />
      </Form.Item>
      <Form.Item label="Description">
        <Input.TextArea value={role.description} disabled />
      </Form.Item>
    </Form>
  );
};
