import { Button, DatePicker, Empty, Form, Input, Typography } from 'antd';
import { formatDate } from 'ui/utils/formatDate';
import { FORM_MODE, FORM_MODE_TYPE } from 'ui/utils/formMode';

import { useTranslatedTexts } from './hooks';
import { IUserForm } from './interface';
import { Permission, PermissionsSelect } from './PermissionSelect';

const { Title } = Typography;
export type UserFormProps = {
  user?: IUserForm | null;
  onFinish: (values: IUserForm) => Promise<void>;
  allPermissions: Permission[];
  formMode?: FORM_MODE_TYPE;
};
export const UserForm = ({ user, onFinish, allPermissions, formMode }: UserFormProps): JSX.Element => {
  const [form] = Form.useForm<IUserForm>();
  const { yupSync, okButtonLabel, userLabel } = useTranslatedTexts();
  const initialValues = user
    ? {
        ...user,
        emailConfirmedAt: formatDate(user.emailConfirmedAt),
        createdAt: formatDate(user.createdAt),
        updatedAt: formatDate(user.updatedAt),
      }
    : {};
  if (formMode !== FORM_MODE.CREATE && !user) return <Empty />;
  return (
    <Form
      form={form}
      initialValues={initialValues}
      labelCol={{ span: 8, offset: 0 }}
      labelAlign="left"
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      disabled={formMode !== FORM_MODE.EDIT}>
      <Title level={3}>{userLabel}</Title>
      <Form.Item label="ID" name="id" hidden>
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="email" rules={[yupSync]}>
        <Input />
      </Form.Item>
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="Permissions" name="permissions">
        <PermissionsSelect permissions={allPermissions} />
      </Form.Item>
      {formMode === FORM_MODE.VIEW ? (
        <>
          <Form.Item label="Created At" name="createdAt">
            <DatePicker style={{ width: '100%' }} disabled />
          </Form.Item>
          <Form.Item label="Updated At" name="updatedAt">
            <DatePicker style={{ width: '100%' }} disabled />
          </Form.Item>
          <Form.Item label="Email Confirmed At" name="emailConfirmedAt">
            <DatePicker style={{ width: '100%' }} disabled />
          </Form.Item>
          <Form.Item label="Confirmation Code" name="confirmationCode">
            <Input disabled />
          </Form.Item>{' '}
        </>
      ) : null}
      {formMode === FORM_MODE.EDIT || formMode === FORM_MODE.CREATE ? (
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {okButtonLabel}
          </Button>
        </Form.Item>
      ) : null}
    </Form>
  );
};
