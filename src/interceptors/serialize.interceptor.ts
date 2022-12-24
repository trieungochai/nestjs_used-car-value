import { ExecutionContext, NestInterceptor, CallHandler } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { plainToClass } from 'class-transformer';

import { UserDto } from 'src/users/dtos/user.dto';

export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // Run something before a request is handled by the request handler
    // console.log('Im running before the handler', context)

    return next.handle().pipe(
      map((data: any) => {
        // Run something before the response is sent out
        // console.log('Im running before response is sent out', data);
        return plainToClass(UserDto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
