import * as Yup from 'yup';
import i18n from 'translation/index';
import { RequiredStringSchema } from 'yup/lib/string';
import { AnyObject } from 'yup/lib/types';

export const getEmailRule = (): RequiredStringSchema<string | undefined, AnyObject> => {
  return Yup.string()
    .required(
      i18n.t('validation.common.required', {
        fieldName: i18n.t('signIn.form.emailAddress'),
      }),
    )
    .email(
      i18n.t('validation.common.formatIncorrect', {
        fieldName: i18n.t('signIn.form.emailAddress'),
      }),
    );
};
