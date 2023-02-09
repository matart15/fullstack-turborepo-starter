import * as Yup from 'yup';
import i18n from 'translation/index';
import { AllowedLanguages } from 'constants/index';
import { getEmailRule } from '../sharedValidationRules';

export const schemaValidate = (currentLocale: AllowedLanguages) => {
  i18n.changeLanguage(currentLocale); // hack. We could not easily set language on react component from next  path
  return Yup.object().shape({
    email: getEmailRule(),
  });
};
