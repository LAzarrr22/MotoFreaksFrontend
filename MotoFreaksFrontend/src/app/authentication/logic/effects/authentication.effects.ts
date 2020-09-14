import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthenticationService} from '../services/authentication.service';
import {Action, Store} from '@ngrx/store';
import {
  USER_LOGIN,
  USER_LOGOUT,
  UserLogin,
  UserLoginFail,
  UserLoginSuccess,
  UserLogout
} from '../actions/authentication.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {AuthenticationState} from '../store';
import {LoginSuccessfulDto} from "../dto/response/login-successful.model";

@Injectable()
export class AuthenticationEffects {
  constructor(private actions$: Actions, private store$: Store<AuthenticationState>, private authService: AuthenticationService) {
  }

  @Effect()
  logout$: Observable<Action> = this.actions$
    .pipe(
      ofType(USER_LOGOUT),
      map(_ => {
        this.authService.logout();
      }),
      map(_ => new UserLogout())
    );

  @Effect()
  login$: Observable<Action> = this.actions$
    .pipe(
      ofType(USER_LOGIN),
      switchMap((action: UserLogin) => {
        return this.authService.login(action.payload);
      }),
      switchMap((userData: LoginSuccessfulDto) => [
        new UserLoginSuccess(userData),
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new UserLoginFail(error));
        return caught;
      })
    );
}
