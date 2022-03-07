import { ExceptionBase } from '@libs/exceptions';

export class AuthConfirmationCodeDoesNotExist extends ExceptionBase {
  static readonly message = 'コードが間違っております';

  public readonly code = 'AUTH.USER_confirmationCode_DOES_NO_EXIST';

  constructor(metadata?: unknown) {
    super(AuthConfirmationCodeDoesNotExist.message, undefined, metadata);
  }
}
