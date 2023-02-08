import { ExceptionBase } from './exception.base';
import { NO_PERMISSION } from './exception.codes';

/**
 * Used to indicate conflicting entities (usually in the database)
 *
 * @class NoPermissionException
 * @extends {ExceptionBase}
 */
export class NoPermissionException extends ExceptionBase {
  readonly code = NO_PERMISSION;

  static readonly message = 'no permission';

  constructor(message = NoPermissionException.message) {
    super(message);
  }
}
