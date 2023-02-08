---
to: packages/ui/components/<%= h.changeCase.camel(name) %>/edit/index.tsx
---
import { Button, DatePicker, Empty, Form, Input, Row, Typography } from 'antd';
import { formatDate } from 'ui/utils/formatDate';
import { I<%= h.changeCase.pascal(name) %>Edit } from './interface';

const { Title } = Typography;
export type <%= h.changeCase.pascal(name) %>EditProps = {
  <%= h.changeCase.camel(name) %>?: I<%= h.changeCase.pascal(name) %>Edit | null;
  onFinish: (values: I<%= h.changeCase.pascal(name) %>Edit) => Promise<void>;
  editMode?: boolean;
};
export const <%= h.changeCase.pascal(name) %>Edit = ({ <%= h.changeCase.camel(name) %>, onFinish, editMode }: <%= h.changeCase.pascal(name) %>EditProps): JSX.Element => {
  const [form] = Form.useForm< I<%= h.changeCase.pascal(name) %>Edit>();
  const { yupSync, okButtonLabel, <%= h.changeCase.camel(name) %>Label } = useTranslatedTexts();
  if (!<%= h.changeCase.camel(name) %>) return <Empty />;
  return (
    <Form
      initialValues={{
        ...<%= h.changeCase.camel(name) %>,
        createdAt: formatDate(<%= h.changeCase.camel(name) %>.createdAt),
        updatedAt: formatDate(<%= h.changeCase.camel(name) %>.updatedAt),
      }}
      labelCol={{ span: 8, offset: 0 }}
      labelAlign="left"
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      disabled={!editMode}>
      <Title level={3}><%= h.changeCase.camel(name) %>Label</Title>
      <Form.Item label="ID" name="id" hidden>
        <Input />
      </Form.Item>
      <Form.Item label="Created At" name="createdAt">
        <DatePicker disabled />
      </Form.Item>
      <Form.Item label="Updated At" name="updatedAt">
        <DatePicker disabled />
      </Form.Item>
      <Form.Item label="Field" name="customField">
        <Input />
      </Form.Item>
      {editMode ? (
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      ) : undefined}
    </Form>
  );
};
