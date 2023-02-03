import { Rule } from 'antd/lib/form';
import { SignInType } from 'constants/signIn';
import { useState } from 'react';
import i18n from 'translation/index';
import { useCurrentLocale } from 'ui/utils/common';
import { converSchemaToAntdRule } from 'validations';
import { schemaValidate } from 'validations/SignIn/index';

import { SignInInterface } from './SignIn.interface';

export const useRecaptha = (
  onSubmit: (v: SignInInterface) => Promise<void>,
): {
  OnFinishWithrecaptha: (v: SignInInterface) => void;
  reCaptchaChangeHandler: (value: boolean) => void;
} => {
  const [isValid, setIsValid] = useState<boolean>(false);

  const OnFinishWithrecaptha = (v: SignInInterface): void => {
    if (!isValid) {
      return;
    }
    onSubmit(v);
  };
  const reCaptchaChangeHandler = (value: boolean): void => {
    setIsValid(Boolean(value));
  };
  return { OnFinishWithrecaptha, reCaptchaChangeHandler };
};
export const useTranslatedTexts = (
  signInType: SignInType,
): {
  yupSync: Rule;
  titleSignIn: string;
  emailLabel: string;
  passwordLabel: string;
  forgotYourPasswordLabel: string;
  clickHereLabel: string;
  signInLabel: string;
  signupLabel: string;
} => {
  const currentLocale = useCurrentLocale();
  i18n.changeLanguage(currentLocale); // hack. We could not easily set language on react component from next  path
  const yupSync = converSchemaToAntdRule(schemaValidate(currentLocale));
  const titleSignIn =
    signInType === SignInType.Admin
      ? i18n.t('pages.signIn.form.titleAdminSignIn')
      : i18n.t('pages.signIn.form.titleSignIn');
  const emailLabel = i18n.t('pages.signIn.form.emailAddress');
  const passwordLabel = i18n.t('pages.signIn.form.password');
  const forgotYourPasswordLabel = i18n.t('pages.signIn.form.forgotYourPassword');
  const clickHereLabel = i18n.t('pages.signIn.form.clickHere');
  const signInLabel = i18n.t('pages.signIn.form.titleSignIn');
  const signupLabel = i18n.t('pages.signIn.form.signup');
  return {
    yupSync,
    titleSignIn,
    emailLabel,
    passwordLabel,
    forgotYourPasswordLabel,
    clickHereLabel,
    signInLabel,
    signupLabel,
  };
};
