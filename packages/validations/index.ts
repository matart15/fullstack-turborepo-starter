import { Rule } from 'antd/lib/form';
import { StoreValue } from 'antd/lib/form/interface';
import BaseSchema from 'yup/lib/schema';

export const converSchemaToAntdRule = (schema: BaseSchema): Rule => {
  return {
    async validator(ruleObject: any, value: StoreValue): Promise<void> {
      const field = 'field';
      schema.validateSyncAt(ruleObject[field], {
        [ruleObject[field]]: value,
      });
    },
  };
};
