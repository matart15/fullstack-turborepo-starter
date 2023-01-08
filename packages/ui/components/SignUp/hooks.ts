import { useState } from 'react';
import i18n from 'translation/index';

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
  titleSignUp: string;
  emailLabel: string;
  passwordLabel: string;
  passwordConfirmLabel: string;
  signUpLabel: string;
} => {
  const titleSignUp = i18n.t('signUp.form.titleSignUp');
  const emailLabel = i18n.t('signUp.form.emailAddress');
  const passwordLabel = i18n.t('signUp.form.password');
  const passwordConfirmLabel = i18n.t('signUp.form.passwordConfirm');
  const signUpLabel = i18n.t('signUp.form.titleSignUp');
  return { titleSignUp, emailLabel, passwordLabel, passwordConfirmLabel, signUpLabel };
};
