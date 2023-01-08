import { Button, Col, Form, Input, Row, Typography } from 'antd';
import ReCAPTCHA from 'react-google-recaptcha';
import { converSchemaToAntdRule } from 'validations';
import { schemaValidate } from 'validations/SignUp/index';

import { useRecaptha, useTranslatedTexts } from './hooks';
import { SignUpInterface } from './SignUp.interface';

const { Title } = Typography;
const yupSync = converSchemaToAntdRule(schemaValidate);

export interface SignUpProps {
  onSubmit: (v: SignUpInterface) => Promise<void>;
  recaptchaSitekey?: string;
}

export const SignUp = ({ onSubmit, recaptchaSitekey }: SignUpProps): JSX.Element => {
  const [form] = Form.useForm<SignUpInterface & { passwordConfirm: string }>();

  const { titleSignUp, emailLabel, passwordLabel, passwordConfirmLabel, signUpLabel } = useTranslatedTexts();

  const { OnFinishWithrecaptha, reCaptchaChangeHandler } = useRecaptha(onSubmit);
  return (
    <Row justify="center">
      <Form
        form={form}
        name="SignUpForm"
        initialValues={{}}
        layout="vertical"
        autoComplete="off"
        scrollToFirstError
        onFinish={OnFinishWithrecaptha}>
        <Title level={4}>{titleSignUp}</Title>
        <Form.Item
          label={<Row>{emailLabel}</Row>}
          name="email"
          data-testid="test-signUp-email"
          required={false}
          rules={[yupSync]}>
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label={<Row>{passwordLabel}</Row>}
          name="password"
          data-testid="test-signUp-password"
          required={false}
          rules={[yupSync]}>
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item
          label={<Row>{passwordConfirmLabel}</Row>}
          name="passwordConfirm"
          data-testid="test-signUp-password-confirm"
          required={false}
          rules={[yupSync]}>
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item>
          <Row>
            <ReCAPTCHA sitekey={recaptchaSitekey} onChange={reCaptchaChangeHandler} />
          </Row>
          <Row>
            <Col flex="auto" />
            <Col>
              <Button type="primary" htmlType="submit" size="large">
                {signUpLabel}
              </Button>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Row>
  );
};
