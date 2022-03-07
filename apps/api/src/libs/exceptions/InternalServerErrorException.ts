import { ExceptionBase } from './exception.base';
import { INTERNAL_SERVER_ERROR } from './exception.codes';

/**
 * Used to indicate that entity is not found
 *
 * @class NotFoundException
 * @extends {ExceptionBase}
 */
export class InternalServerErrorException extends ExceptionBase {
  static readonly message = 'Internal server error';

  constructor(message = InternalServerErrorException.message) {
    super(message);
  }

  readonly code = INTERNAL_SERVER_ERROR;
}
