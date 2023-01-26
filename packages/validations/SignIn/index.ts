import * as Yup from 'yup';
import i18n from 'translation/index';
import { AllowedLanguages, PASSWORD_REG } from 'constants/index';
import { getEmailRule } from '../sharedValidationRules';

export const schemaValidate = (currentLocale: AllowedLanguages) => {
  i18n.changeLanguage(currentLocale); // hack. We could not easily set language on react component from next  path
  return Yup.object().shape({
    email: getEmailRule(),
    password: Yup.string()
      .required(
        i18n.t('validation.common.required', {
          fieldName: i18n.t('signIn.passwordSignIn'),
        }),
      )
      .min(
        8,
        i18n.t('validation.common.minLength', {
          fieldName: i18n.t('signIn.passwordSignIn'),
          context: 'withName',
          minLength: 8,
        }),
      )
      .max(
        50,
        i18n.t('validation.common.maxLength', {
          fieldName: i18n.t('signIn.passwordSignIn'),
          context: 'withName',
          maxLength: 50,
        }),
      )
      .matches(
        PASSWORD_REG,
        i18n.t('validation.common.requiredEnterCharacterAndNumber', {
          fieldName: i18n.t('signIn.passwordSignIn'),
        }),
      ),
  });
};
