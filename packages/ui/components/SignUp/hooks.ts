import { Rule } from 'antd/lib/form';
import { useState } from 'react';
import i18n from 'translation/index';
import { converSchemaToAntdRule } from 'validations';
import { schemaValidate } from 'validations/SignUp/index';

import { useCurrentLocale } from '../../utils/common';
import { SignUpInterface } from './SignUp.interface';

export const useRecaptha = (
  onSubmit: (v: SignUpInterface) => Promise<void>,
): {
  OnFinishWithrecaptha: (v: SignUpInterface & { passwordConfirm: string }) => void;
  reCaptchaChangeHandler: (value: boolean) => void;
} => {
  const [isValid, setIsValid] = useState<boolean>(false);

  const OnFinishWithrecaptha = (v: SignUpInterface & { passwordConfirm: string }): void => {
    if (!isValid) {
      return;
    }
    if (v.password !== v.passwordConfirm) {
      return;
    }
    onSubmit(v);
  };
  const reCaptchaChangeHandler = (value: boolean): void => {
    setIsValid(Boolean(value));
  };
  return { OnFinishWithrecaptha, reCaptchaChangeHandler };
};
export const useTranslatedTexts = (): {
  yupSync: Rule;
  titleSignUp: string;
  emailLabel: string;
  passwordLabel: string;
  passwordConfirmLabel: string;
  signUpLabel: string;
} => {
  const currentLocale = useCurrentLocale();
  i18n.changeLanguage(currentLocale); // hack. We could not easily set language on react component from next  path
  const yupSync = converSchemaToAntdRule(schemaValidate(currentLocale));
  const titleSignUp = i18n.t('signUp.form.titleSignUp');
  const emailLabel = i18n.t('signUp.form.emailAddress');
  const passwordLabel = i18n.t('signUp.form.password');
  const passwordConfirmLabel = i18n.t('signUp.form.passwordConfirm');
  const signUpLabel = i18n.t('signUp.form.titleSignUp');
  return { yupSync, titleSignUp, emailLabel, passwordLabel, passwordConfirmLabel, signUpLabel };
};
