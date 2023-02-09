import { Rule } from 'antd/lib/form';
import i18n from 'translation/index';
import { useCurrentLocale } from 'ui/utils/common';
import { converSchemaToAntdRule } from 'validations';
import { schemaValidate } from 'validations/User';

export const useTranslatedTexts = (): {
  yupSync: Rule;
  okButtonLabel: string;
  userLabel: string;
} => {
  const currentLocale = useCurrentLocale();
  i18n.changeLanguage(currentLocale); // hack. We could not easily set language on react component from next  path
  const yupSync = converSchemaToAntdRule(schemaValidate(currentLocale));
  const userLabel = i18n.t('pages.user.title');
  const okButtonLabel = i18n.t('common.ok');
  return {
    yupSync,
    okButtonLabel,
    userLabel,
  };
};
