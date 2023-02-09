// enum is bad for tree shaking
// https://engineering.linecorp.com/ja/blog/typescript-enum-tree-shaking/
export const FORM_MODE = {
  CREATE: 'CREATE',
  EDIT: 'EDIT',
  VIEW: 'VIEW',
} as const;
export type FORM_MODE_TYPE = (typeof FORM_MODE)[keyof typeof FORM_MODE];
