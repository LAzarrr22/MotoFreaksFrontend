import {Action} from "@ngrx/store";
import {LoginSuccessfulDto} from '../dto/response/login-successful.model';
import {LoginModel} from "../dto/request/login.model";

export const USER_LOGIN = '[Auth] USER_LOGIN';
export const USER_LOGIN_SUCCESS = '[Auth] USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = '[Auth] USER_LOGIN_FAILED';

export const USER_LOGOUT = '[Auth] USER_LOGOUT';

export class UserLogin implements Action {
  readonly type = USER_LOGIN;

  constructor(public payload: LoginModel) {
  }
}

export class UserLoginSuccess implements Action {
  readonly type = USER_LOGIN_SUCCESS;

  constructor(public payload: LoginSuccessfulDto) {
  }
}

export class UserLoginFail implements Action {
  readonly type = USER_LOGIN_FAIL;

  constructor(public payload: any) {
  }
}

export class UserLogout implements Action {
  readonly type = USER_LOGOUT;

  constructor() {
  }
}


export type Actions =
  | UserLogin
  | UserLoginSuccess
  | UserLoginFail
  | UserLogout;
