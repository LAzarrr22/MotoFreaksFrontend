import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthenticationService} from '../services/authentication.service';
import {Action, Store} from '@ngrx/store';
import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
  UserLogin,
  UserLoginFail,
  UserLoginSuccess,
  UserLogout,
  UserRegister,
  UserRegisterSuccess
} from '../actions/authentication.actions';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
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
        localStorage.removeItem('token')
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
      tap((userData: LoginSuccessfulDto) => localStorage.setItem('token', userData.token)),
      switchMap((userData: LoginSuccessfulDto) => [
        new UserLoginSuccess(userData),
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new UserLoginFail(error));
        return caught;
      })
    );

  @Effect()
  register$: Observable<Action> = this.actions$
    .pipe(
      ofType(USER_REGISTER),
      switchMap((action: UserRegister) => {
        return this.authService.register(action.payload);
      }),
      switchMap((userData: string) => [
        new UserRegisterSuccess(userData),
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new UserLoginFail(error));
        return caught;
      })
    );
}
