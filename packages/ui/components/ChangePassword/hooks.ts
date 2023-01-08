import i18n from 'translation/index';

export const useTranslatedTexts = (): {
  titleChangePassword: string;
  passwordLabel: string;
  newPasswordLabel: string;
  changePasswordLabel: string;
} => {
  const titleChangePassword = i18n.t('changePassword.form.titleChangePassword');
  const passwordLabel = i18n.t('changePassword.form.password');
  const newPasswordLabel = i18n.t('changePassword.form.passwordConfirm');
  const changePasswordLabel = i18n.t('changePassword.form.changePassword');
  return { titleChangePassword, passwordLabel, newPasswordLabel, changePasswordLabel };
};
