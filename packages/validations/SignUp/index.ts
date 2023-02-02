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
          fieldName: i18n.t('pages.signUp.passwordSignUp'),
        }),
      )
      .min(
        8,
        i18n.t('validation.common.minLength', {
          fieldName: i18n.t('pages.signUp.passwordSignUp'),
          context: 'withName',
          minLength: 8,
        }),
      )
      .max(
        50,
        i18n.t('validation.common.maxLength', {
          fieldName: i18n.t('pages.signUp.passwordSignUp'),
          context: 'withName',
          maxLength: 50,
        }),
      )
      .matches(
        PASSWORD_REG,
        i18n.t('validation.common.requiredEnterCharacterAndNumber', {
          fieldName: i18n.t('pages.signUp.passwordSignUp'),
        }),
      ),
    passwordConfirm: Yup.string()
      .when('password', {
        // this should match with input field name
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref('password')],
          i18n.t('validation.common.notMatch', {
            fieldName: i18n.t('pages.signUp.form.passwordConfirm'),
          }),
        ),
      })
      .required(
        i18n.t('validation.common.required', {
          fieldName: i18n.t('pages.signUp.form.passwordConfirm'),
        }),
      ),
    // passwordConfirm: Yup.string().test('passwords-match', 'Passwords must match', function (value) {
    //   console.log('qqqqqqqqqq', this, value);
    //   return this.parent.password === value;
    // }),
  });
};
