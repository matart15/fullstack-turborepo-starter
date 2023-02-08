import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Space } from 'antd';
import { BaseOptionType } from 'antd/es/select';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { getSearch, SearchField } from './getSearch';

const AVAILABLE_OPERATIONS = {
  number: [
    { value: 'equals', label: '=' },
    { value: 'gt', label: '>' },
    { value: 'gte', label: '>=' },
    { value: 'lt', label: '<' },
    { value: 'lte', label: '<=' },
  ],
  string: [
    { value: 'contains', label: 'contains' },
    { value: 'endsWith', label: 'endsWith' },
    { value: 'equals', label: '=' },
    { value: 'startsWith', label: 'startsWith' },
  ],
  date: [
    { value: 'equals', label: '=' },
    { value: 'gt', label: '>' },
    { value: 'gte', label: '>=' },
    { value: 'lt', label: '<' },
    { value: 'lte', label: '<=' },
  ],
};

export const SearchForm = ({
  onSearch,
  availableSearchFields,
}: {
  availableSearchFields: SearchField[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSearch: (values: any) => void;
}): JSX.Element => {
  const [form] = Form.useForm();

  const router = useRouter();
  const { search } = getSearch({
    query: router.query,
    availableSearchFields,
  });

  const [availableFields, setAvailableFields] = useState<BaseOptionType[]>(
    availableSearchFields.map(a => ({
      value: a.name,
      label: a.name,
    })),
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onValuesChange = (_changedValues: any, allValues: any): void => {
    const leftFields = availableSearchFields.filter(
      availableSearchField => !allValues.searchCriterias.map(a => a?.fieldName).includes(availableSearchField.name),
    );
    setAvailableFields(
      leftFields.map(
        (a): BaseOptionType => ({
          value: a.name,
          label: a.name,
        }),
      ),
    );
  };
  const selectedSearchFields = form.getFieldValue('searchCriterias');

  const isAddSearFieldButtonVisible =
    !selectedSearchFields ||
    (Array.isArray(selectedSearchFields) && selectedSearchFields.length < availableSearchFields.length);
  return (
    <Form
      form={form}
      name="dynamic_form_complex"
      initialValues={{ searchCriterias: search }}
      onFinish={onSearch}
      style={{ maxWidth: 600 }}
      autoComplete="off"
      onValuesChange={onValuesChange}>
      <Form.List name="searchCriterias">
        {(fields, { add, remove }): JSX.Element => {
          return (
            <>
              {fields.map(({ key, name, ...restField }) => {
                const ind = form.getFieldValue('searchCriterias')?.[key]?.fieldName;
                const operationOptions =
                  AVAILABLE_OPERATIONS[availableSearchFields.find((a): boolean => a.name === ind)?.type] || [];
                return (
                  <Space key={key} align="baseline">
                    <Form.Item
                      {...restField}
                      name={[name, 'fieldName']}
                      rules={[{ required: true, message: 'Missing field' }]}>
                      <Select style={{ width: 120 }} options={availableFields} />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'condition']}
                      rules={[{ required: true, message: 'Missing condition' }]}>
                      <Select style={{ width: 120 }} options={operationOptions} />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'value']}
                      rules={[{ required: true, message: 'Missing value' }]}>
                      <Input placeholder="First Name" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={(): void => remove(name)} />
                  </Space>
                );
              })}
              {isAddSearFieldButtonVisible ? (
                <Form.Item>
                  <Button type="dashed" onClick={add} block icon={<PlusOutlined />}>
                    Add search field
                  </Button>
                </Form.Item>
              ) : null}
            </>
          );
        }}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
