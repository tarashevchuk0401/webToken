import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, exhaustAll, exhaustMap, take } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private authService: AuthServiceService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {

    return this.authService.userSub.pipe(
      take(1),
      exhaustMap(token => {
        if (!token) {
          return next.handle(request)
        }
        let modifiedRequest = request.clone({

          setHeaders: {
            TEST: `!!!!!!!!!!!!!!!!!`,
          },
          params: request.params.append('auth', token)
        })
        return next.handle(modifiedRequest);
      })
    )
  }
}
