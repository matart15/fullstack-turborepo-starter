import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
// import { nanoid } from 'nanoid'
import { Observable, tap } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { RequestContextService } from './RequestContextService';

const nanoid = (size: number): string => {
  return uuid().replace(/-/g, '').slice(0, size);
};

@Injectable()
export class ContextInterceptor implements NestInterceptor {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();

    /**
     * Setting an ID in the global context for each request.
     * This ID can be used as correlation id shown in logs
     */
    const requestId = request?.body?.requestId ?? nanoid(6);

    RequestContextService.setRequestId(requestId);

    return next.handle().pipe(
      tap(() => {
        // Perform cleaning if needed
      }),
    );
  }
}
