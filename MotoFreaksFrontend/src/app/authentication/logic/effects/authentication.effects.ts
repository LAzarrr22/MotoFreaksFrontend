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
  UserRegister,
  UserRegisterFail,
  UserRegisterSuccess
} from '../actions/authentication.actions';
import {catchError, switchMap, tap} from 'rxjs/operators';
import {AuthenticationState} from '../store';
import {LoginSuccessfulDto} from "../dto/response/login-successful.model";
import {AppPath} from "../../../common/enums/app-path.enum";
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationEffects {
  constructor(private actions$: Actions, private store$: Store<AuthenticationState>, private authService: AuthenticationService, private router: Router) {
  }

  @Effect({dispatch: false})
  public logout$: Observable<Action> = this.actions$
    .pipe(
      ofType(USER_LOGOUT),
      tap((user) => localStorage.removeItem('token'))
    );

  @Effect()
  login$: Observable<Action> = this.actions$
    .pipe(
      ofType(USER_LOGIN),
      switchMap((action: UserLogin) => {
        return this.authService.login(action.payload);
      }),
      tap((userData: LoginSuccessfulDto) => {
        localStorage.setItem('token', userData.token)
        this.router.navigate([AppPath.HOME_PATH])
      }),
      switchMap((userData: LoginSuccessfulDto) => [
        new UserLoginSuccess(userData),
      ]),

      catchError((error, caught) => {
        this.store$.dispatch(new UserLoginFail(error.error.message));
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
      tap(() => {
        this.router.navigate([AppPath.HOME_PATH])
      }),
      switchMap((userData: string) => [
        new UserRegisterSuccess(userData),
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new UserRegisterFail(error.error));
        return caught;
      })
    );
}
