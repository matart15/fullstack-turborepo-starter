import * as Yup from 'yup';
import i18n from 'translation/index';
import { AllowedLanguages } from 'constants/index';

export const schemaValidate = (currentLocale: AllowedLanguages) => {
  i18n.changeLanguage(currentLocale); // hack. We could not easily set language on react component from next  path
  return Yup.object().shape({
    name: Yup.string()
      .required(
        i18n.t('validation.common.required', {
          fieldName: i18n.t('pages.role.name'),
        }),
      )
      .min(
        8,
        i18n.t('validation.common.minLength', {
          fieldName: i18n.t('pages.role.name'),
          context: 'withName',
          minLength: 8,
        }),
      )
      .max(
        50,
        i18n.t('validation.common.maxLength', {
          fieldName: i18n.t('pages.role.name'),
          context: 'withName',
          maxLength: 50,
        }),
      ),
  });
};
