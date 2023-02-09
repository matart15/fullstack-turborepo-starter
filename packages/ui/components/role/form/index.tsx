import { Button, Empty, Form, Input, Typography } from 'antd';
import { formatDate } from 'ui/utils/formatDate';
import { FORM_MODE, FORM_MODE_TYPE } from 'ui/utils/formMode';

import { useTranslatedTexts } from './hooks';
import { IRoleForm } from './interface';

const { Title } = Typography;
export type RoleFormProps = {
  role?: IRoleForm | null;
  onFinish: (values: IRoleForm) => Promise<void>;
  formMode?: FORM_MODE_TYPE;
};
export const RoleForm = ({ role, onFinish, formMode }: RoleFormProps): JSX.Element => {
  const [form] = Form.useForm<IRoleForm>();
  const { yupSync, okButtonLabel, roleLabel } = useTranslatedTexts();
  const initialValues = role
    ? {
        ...role,
        createdAt: formatDate(role.createdAt),
        updatedAt: formatDate(role.updatedAt),
      }
    : {};
  if (formMode !== FORM_MODE.CREATE && !role) return <Empty />;
  return (
    <Form
      form={form}
      initialValues={initialValues}
      labelCol={{ span: 8, offset: 0 }}
      labelAlign="left"
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      disabled={formMode !== FORM_MODE.EDIT}>
      <Title level={3}>{roleLabel}</Title>
      <Form.Item label="ID" name="id" hidden>
        <Input />
      </Form.Item>
      <Form.Item label="Name" name="name" data-testid="test-project-name" required rules={[yupSync]}>
        <Input />
      </Form.Item>
      <Form.Item label="Description" name="description" data-testid="test-project-description">
        <Input />
      </Form.Item>
      {formMode === FORM_MODE.EDIT || formMode === FORM_MODE.CREATE ? (
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {okButtonLabel}
          </Button>
        </Form.Item>
      ) : undefined}
    </Form>
  );
};
