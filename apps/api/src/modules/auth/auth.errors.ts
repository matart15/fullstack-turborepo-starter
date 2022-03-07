import { ExceptionBase } from '@libs/exceptions';

export class AuthInvalidPasssword extends ExceptionBase {
  static readonly message = '半角英字と半角数字それぞれ1文字以上含む8文字以上のパスワードを入れてください';

  public readonly code = 'AUTH.INVALID_PASSSWORD';

  constructor(metadata?: unknown) {
    super(AuthInvalidPasssword.message, undefined, metadata);
  }
}
