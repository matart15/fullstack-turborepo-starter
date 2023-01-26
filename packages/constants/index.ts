// export * from './stringConstant';
export const PASSWORD_REG =
  /^(?=.*[a-z])(?=.*\d)(?=.*[$!*?&\\.\\/`()\\[\]+-=#@~])[A-Za-z\d$!*?&\\.\\/`()\\[\]+-_=!#@~]{8,}$/;

export const ALLOWED_LANGUAGES = ['en', 'ja'];
export type AllowedLanguages = (typeof ALLOWED_LANGUAGES)[number];
