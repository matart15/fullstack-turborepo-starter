import * as Yup from 'yup';
import i18n from 'translation/index';
import { PASSWORD_REG } from 'constants/index';

export const schemaValidate = Yup.object().shape({
  password: Yup.string()
    .required(
      i18n.t('validation.common.required', {
        fieldName: i18n.t('changePassword.form.password'),
      }),
    )
    .min(
      8,
      i18n.t('validation.common.minLength', {
        fieldName: i18n.t('changePassword.form.password'),
        context: 'withName',
        minLength: 8,
      }),
    )
    .max(
      50,
      i18n.t('validation.common.maxLength', {
        fieldName: i18n.t('changePassword.form.password'),
        context: 'withName',
        maxLength: 50,
      }),
    )
    .matches(
      PASSWORD_REG,
      i18n.t('validation.common.requiredEnterCharacterAndNumber', {
        fieldName: i18n.t('changePassword.form.password'),
      }),
    ),
  newPassword: Yup.string()
    .when('password', {
      // this should match with input field name
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref('password')],
        i18n.t('validation.common.notMatch', {
          fieldName: i18n.t('signUp.form.passwordConfirm'),
        }),
      ),
    })
    .required(
      i18n.t('validation.common.required', {
        fieldName: i18n.t('signUp.form.passwordConfirm'),
      }),
    ),
  // passwordConfirm: Yup.string().test('passwords-match', 'Passwords must match', function (value) {
  //   console.log('qqqqqqqqqq', this, value);
  //   return this.parent.password === value;
  // }),
});
