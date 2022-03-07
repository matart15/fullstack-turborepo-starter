import { RequestContext } from 'nestjs-request-context';

/**
 * Setting some isolated context for each request.
 */

export class AppRequestContext extends RequestContext {
  requestId: string | undefined;
}
