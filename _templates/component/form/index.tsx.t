---
to: packages/ui/components/<%= h.changeCase.camel(name) %>/form/index.tsx
---
import { Button, DatePicker, Empty, Form, Input, Typography } from 'antd';
import { formatDate } from 'ui/utils/formatDate';
import { FORM_MODE, FORM_MODE_TYPE } from 'ui/utils/formMode';

import { useTranslatedTexts } from './hooks';
import { I<%= h.changeCase.pascal(name) %>Form } from './interface';

const { Title } = Typography;
export type <%= h.changeCase.pascal(name) %>FormProps = {
  <%= h.changeCase.camel(name) %>?: I<%= h.changeCase.pascal(name) %>Form | null;
  onFinish: (values: I<%= h.changeCase.pascal(name) %>Form) => Promise<void>;
  formMode?: FORM_MODE_TYPE;
};
export const <%= h.changeCase.pascal(name) %>Form = ({ <%= h.changeCase.camel(name) %>, onFinish, formMode }: <%= h.changeCase.pascal(name) %>FormProps): JSX.Element => {
  const [form] = Form.useForm<I<%= h.changeCase.pascal(name) %>Form>();
  const { yupSync, okButtonLabel, <%= h.changeCase.camel(name) %>Label } = useTranslatedTexts();
  const initialValues = <%= h.changeCase.camel(name) %> ? {
        ...<%= h.changeCase.camel(name) %>,
        createdAt: formatDate(<%= h.changeCase.camel(name) %>.createdAt),
        updatedAt: formatDate(<%= h.changeCase.camel(name) %>.updatedAt),
      } : {};
  if (formMode !== FORM_MODE.CREATE && !<%= h.changeCase.camel(name) %>) return <Empty />;
  return (
    <form
      form={form}
      initialValues={initialValues}
      labelCol={{ span: 8, offset: 0 }}
      labelAlign="left"
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      disabled={formMode !== FORM_MODE.EDIT}>
      <Title level={3}>{<%= h.changeCase.camel(name) %>Label}</Title>
      <Form.Item label="ID" name="id" hidden>
        <Input />
      </Form.Item>
      <Form.Item 
        label="Field" 
        name="customField"
        data-testid="test-project-customField"
        required
        rules={[yupSync]}
      >
        <Input />
      </Form.Item>
      {formMode === FORM_MODE.VIEW ? (
        <>
          <Form.Item
            label="Created At"
            name="createdAt"
          >
            <DatePicker disabled style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item 
            label="Updated At" 
            name="updatedAt"
          >
            <DatePicker disabled style={{ width: '100%' }} />
          </Form.Item>
        </>
      ) : undefined}
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
