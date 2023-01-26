import { Button, Col, Form, Input, Row, Typography } from 'antd';
import { SignInType } from 'constants/signIn';
import ReCAPTCHA from 'react-google-recaptcha';

import { useRecaptha, useTranslatedTexts } from './hooks';
import { SignInInterface } from './SignIn.interface';

const { Title, Link } = Typography;

export interface SignInProps {
  signInType?: SignInType;
  onSubmit: (v: SignInInterface) => Promise<void>;
  openTemporaryRegister?: () => Promise<void> | void;
  recaptchaSitekey?: string;
}

export const SignIn = ({
  onSubmit,
  openTemporaryRegister = (): void => {},
  recaptchaSitekey,
  signInType = SignInType.User,
}: SignInProps): JSX.Element => {
  const [form] = Form.useForm();

  const {
    yupSync,
    titleSignIn,
    emailLabel,
    passwordLabel,
    forgotYourPasswordLabel,
    clickHereLabel,
    signInLabel,
    signupLabel,
  } = useTranslatedTexts(signInType);

  const { OnFinishWithrecaptha, reCaptchaChangeHandler } = useRecaptha(onSubmit);
  return (
    <Row justify="center">
      <Form
        form={form}
        name="SignInForm"
        initialValues={{}}
        layout="vertical"
        autoComplete="off"
        scrollToFirstError
        onFinish={OnFinishWithrecaptha}>
        <Title level={4}>{titleSignIn}</Title>
        <Form.Item
          label={<Row>{emailLabel}</Row>}
          name="email"
          data-testid="test-signIn-email"
          required={false}
          rules={[yupSync]}>
          <Input size="large" />
        </Form.Item>
        <Form.Item
          label={<Row>{passwordLabel}</Row>}
          name="password"
          data-testid="test-signIn-password"
          required={false}
          rules={[yupSync]}>
          <Input.Password size="large" />
        </Form.Item>
        <Form.Item>
          <Row>
            <ReCAPTCHA sitekey={recaptchaSitekey} onChange={reCaptchaChangeHandler} />
          </Row>
          {signInType === SignInType.User && (
            <Row>
              <Row>{forgotYourPasswordLabel}</Row>
              &nbsp;
              <Link href="/mypage/resetPassword/forgotPassword" target="_self">
                {clickHereLabel}
              </Link>
            </Row>
          )}
          <Row>
            <Col>
              <Button type="primary" htmlType="submit" size="large">
                {signInLabel}
              </Button>
            </Col>
            <Col flex="auto" />
            {signInType === SignInType.User && (
              <Col>
                <Button type="primary" size="large" onClick={openTemporaryRegister}>
                  {signupLabel}
                </Button>
              </Col>
            )}
          </Row>
        </Form.Item>
      </Form>
    </Row>
  );
};
