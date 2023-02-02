---
to: packages/ui/components/<%= h.changeCase.pascal(name) %>/index.tsx
---
import { Button, Form, Input, Typography } from 'antd';
import { useTranslatedTexts } from './hooks';
import { <%= h.changeCase.pascal(name) %>Interface } from './<%= h.changeCase.pascal(name) %>.interface';

const { Title } = Typography

export interface <%= h.changeCase.pascal(name) %>Props {
  <%= h.changeCase.camel(name) %>: <%= h.changeCase.pascal(name) %>Interface
  onSubmit: (v: <%= h.changeCase.pascal(name) %>Interface) => Promise<void>;
}

export const <%= h.changeCase.pascal(name) %> = ({ 
  <%= h.changeCase.camel(name) %>,
  onSubmint
}: <%= h.changeCase.pascal(name) %>Props): JSX.Element => {
  const [form] = Form.useForm< <%= h.changeCase.pascal(name) %>Interface & { passwordConfirm: string }>();
  const { yupSync, okButtonLabel, <%= h.changeCase.camel(name) %>Label } = useTranslatedTexts();
  return (
    <Form
      form={form}
      name="<%= h.changeCase.pascal(name) %>Form"
      initialValues={<%= h.changeCase.camel(name) %>}
      layout="vertical"
      autoComplete="off"
      scrollToFirstError
      onFinish={onSubmint}>
      <Title level={4}>{<%= h.changeCase.camel(name) %>Label}</Title>
      <Form.Item
        label={<Row>{<%= h.changeCase.camel(name) %>Label}</Row>}
        name="field"
        data-testid="test-<%= h.changeCase.camel(name) %>-field"
        required={false}
        rules={[yupSync]}>
        <Input size="large" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" size="large">
          {okButtonLabel}
        </Button>
      </Form.Item>
    </Form>
  );
};
