import { Button, Col, Form, Input, Row, Typography } from 'antd';

import { ChangePasswordInterface } from './ChangePassword.interface';
import { useTranslatedTexts } from './hooks';

const { Title } = Typography;

export interface ChangePasswordProps {
  onSubmit: (fields: ChangePasswordInterface) => Promise<void>;
}

export const ChangePassword = ({ onSubmit }: ChangePasswordProps): JSX.Element => {
  const { yupSync, titleChangePassword, passwordLabel, newPasswordLabel, changePasswordLabel } = useTranslatedTexts();

  const [form] = Form.useForm<ChangePasswordInterface>();

  return (
    <Row justify="center">
      <Form
        form={form}
        name="SignUpForm"
        initialValues={{}}
        layout="vertical"
        autoComplete="off"
        scrollToFirstError
        onFinish={onSubmit}>
        <Title level={4}>{titleChangePassword}</Title>
        <Form.Item
          label={<Row>{passwordLabel}</Row>}
          name="password"
          data-testid="test-changePasswrod-password"
          required={false}
          rules={[yupSync]}>
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item
          label={<Row>{newPasswordLabel}</Row>}
          name="newPassword"
          data-testid="test-changePasswrod-password-confirm"
          required={false}
          rules={[yupSync]}>
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item>
          <Row>
            <Col flex="auto" />
            <Col>
              <Button type="primary" htmlType="submit" size="large">
                {changePasswordLabel}
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Row>
  );
};
