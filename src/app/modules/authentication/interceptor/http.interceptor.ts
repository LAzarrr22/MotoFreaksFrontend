import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

import {select, Store} from '@ngrx/store';
import {first, switchMap} from 'rxjs/operators';
import {AuthenticationState, getAuthToken} from "../logic/reducers/authentication.reducers";

@Injectable()
export class HTTPCustomInterceptor implements HttpInterceptor {
  constructor(private store: Store<AuthenticationState>) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.pipe(
      select(getAuthToken),
      first(),
      switchMap(token => {
        const authReq = !!token ? request.clone({
          setHeaders: {Authorization: token},
        }) : request;
        return next.handle(authReq);
      })
    );
  }
}
