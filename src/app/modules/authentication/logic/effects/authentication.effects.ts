import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthenticationService} from '../services/authentication.service';
import {Action, Store} from '@ngrx/store';
import {
  CHECK_VALIDATION, CheckValidation, CheckValidationFail, CheckValidationSuccess,
  GET_ROLES,
  GetRoles,
  GetRolesFail,
  GetRolesSuccess,
  SET_ADMIN,
  SET_MODERATOR,
  SetAdmin,
  SetAdminFail,
  SetAdminSuccess,
  SetModerator,
  SetModeratorFail,
  SetModeratorSuccess,
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
import {LoginSuccessfulDto} from "../dto/response/login-successful.model";
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {Router} from "@angular/router";
import {CommonComponentsService} from "../../../common/common.service";
import {GetAllUsers} from "../../../users/logic/action/user.action";
import {RolesEnum} from "../enums/roles.enum";
import {GetAllMessages} from "../../../messages/logic/action/messages.action";
import {GetMyProfile} from "../../../profiles/logic/action/my-profile.action";
import {AuthenticationState} from "../reducers/authentication.reducers";
import {GetAllSentences} from "../../../sentences/logic/action/sentence.actions";

@Injectable()
export class AuthenticationEffects {
  constructor(private actions$: Actions, private store$: Store<AuthenticationState>
    , private authService: AuthenticationService, private router: Router
    , private errorService: CommonComponentsService) {
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
        new GetMyProfile(),
        new GetAllUsers(),
        new GetAllMessages(),
        new GetAllSentences()
      ]),

      catchError((error, caught) => {
        this.store$.dispatch(new UserLoginFail(error.error.message));
        this.errorService.error(error);
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
      switchMap((response: string) => [
        new UserRegisterSuccess(response),
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new UserRegisterFail(error.error));
        this.errorService.error(error);
        return caught;
      })
    );

  @Effect()
  setModerator$: Observable<Action> = this.actions$
    .pipe(ofType(SET_MODERATOR),
      switchMap((action: SetModerator) => {
        return this.authService.setModerator(action.id);
      }),
      tap(() => {
        new GetRoles()
      }),
      switchMap((response: string) => [
        new SetModeratorSuccess(response)
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new SetModeratorFail(error.error));
        this.errorService.error(error);
        return caught;
      })
    );

  @Effect()
  setAdmin$: Observable<Action> = this.actions$
    .pipe(ofType(SET_ADMIN),
      switchMap((action: SetAdmin) => {
        return this.authService.setAdmin(action.id);
      }),
      tap(() => {
        new GetRoles()
      }),
      switchMap((response: string) => [
        new SetAdminSuccess(response)
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new SetAdminFail(error.error));
        this.errorService.error(error);
        return caught;
      })
    )

  @Effect()
  getRoles$: Observable<Action> = this.actions$
    .pipe(
      ofType(GET_ROLES),
      switchMap(() => {
        return this.authService.getRoles();
      }),
      switchMap((roles: RolesEnum[]) => [
        new GetRolesSuccess(roles)
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new GetRolesFail(error.error));
        this.errorService.error(error);
        return caught;
      })
    )

  @Effect()
  checkValidation$: Observable<Action> = this.actions$
    .pipe(
      ofType(CHECK_VALIDATION),
      switchMap(() => {
        return this.authService.checkUserValidation();
      }),
      switchMap((validation: boolean) => [
        new CheckValidationSuccess(validation)
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new CheckValidationFail(error.error));
        this.errorService.error(error);
        return caught;
      })
    )
}
