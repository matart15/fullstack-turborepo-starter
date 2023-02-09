---
to: packages/ui/components/<%= h.changeCase.camel(name) %>/form/hooks.tsx
---

import { Rule } from 'antd/lib/form';
import i18n from 'translation/index';
import { useCurrentLocale } from 'ui/utils/common';
import { converSchemaToAntdRule } from 'validations';
import { schemaValidate } from 'validations/<%= h.changeCase.pascal(name) %>';

export const useTranslatedTexts = (): {
  yupSync: Rule;
  okButtonLabel: string;
  <%= h.changeCase.camel(name) %>Label: string;
} => {
  const currentLocale = useCurrentLocale();
  i18n.changeLanguage(currentLocale); // hack. We could not easily set language on react component from next  path
  const yupSync = converSchemaToAntdRule(schemaValidate(currentLocale));
  const <%= h.changeCase.camel(name) %>Label = i18n.t('pages.<%= h.changeCase.camel(name) %>.customField');
  const okButtonLabel = i18n.t('common.ok');
  return {
    yupSync,
    okButtonLabel,
    <%= h.changeCase.camel(name) %>Label,
  };
};
