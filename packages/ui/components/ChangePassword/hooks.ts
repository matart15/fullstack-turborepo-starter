import { Rule } from 'antd/lib/form';
import i18n from 'translation/index';
import { converSchemaToAntdRule } from 'validations';
import { schemaValidate } from 'validations/ChangePassword/index';

import { useCurrentLocale } from '../../utils/common';

export const useTranslatedTexts = (): {
  yupSync: Rule;
  titleChangePassword: string;
  passwordLabel: string;
  newPasswordLabel: string;
  changePasswordLabel: string;
} => {
  const currentLocale = useCurrentLocale();
  i18n.changeLanguage(currentLocale); // hack. We could not easily set language on react component from next  path
  const yupSync = converSchemaToAntdRule(schemaValidate(currentLocale));
  const titleChangePassword = i18n.t('changePassword.form.titleChangePassword');
  const passwordLabel = i18n.t('changePassword.form.password');
  const newPasswordLabel = i18n.t('changePassword.form.passwordConfirm');
  const changePasswordLabel = i18n.t('changePassword.form.changePassword');
  return { yupSync, titleChangePassword, passwordLabel, newPasswordLabel, changePasswordLabel };
};
