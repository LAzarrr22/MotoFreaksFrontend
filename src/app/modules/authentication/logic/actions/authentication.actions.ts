import {Action} from "@ngrx/store";
import {LoginSuccessfulDto} from '../dto/response/login-successful.model';
import {LoginModel} from "../dto/request/login.model";
import {RegisterModel} from "../dto/request/register.model";
import {RolesEnum} from "../enums/roles.enum";

export const USER_LOGIN = '[Auth] USER_LOGIN';
export const USER_LOGIN_SUCCESS = '[Auth] USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = '[Auth] USER_LOGIN_FAILED';

export const USER_REGISTER = '[Auth] USER_REGISTER';
export const USER_REGISTER_SUCCESS = '[Auth] USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAIL = '[Auth] USER_REGISTER_FAILED';

export const USER_LOGOUT = '[Auth] USER_LOGOUT';

export const SET_MODERATOR = '[Auth] SET_MODERATOR';
export const SET_MODERATOR_SUCCESS = '[Auth] SET_MODERATOR_SUCCESS';
export const SET_MODERATOR_FAIL = '[Auth] SET_MODERATOR_FAIL';

export const SET_ADMIN = '[Auth] SET_ADMIN';
export const SET_ADMIN_SUCCESS = '[Auth] SET_ADMIN_SUCCESS';
export const SET_ADMIN_FAIL = '[Auth] SET_ADMIN_FAIL';

export const GET_ROLES = '[Auth] GET_ROLES';
export const GET_ROLES_SUCCESS = '[Auth] GET_ROLES_SUCCESS';
export const GET_ROLES_FAIL = '[Auth] GET_ROLES_FAIL';

export const CHECK_VALIDATION = '[Auth] CHECK_VALIDATION';
export const CHECK_VALIDATION_SUCCESS = '[Auth] CHECK_VALIDATION_SUCCESS';
export const CHECK_VALIDATION_FAIL = '[Auth] CHECK_VALIDATION_FAIL';


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

  constructor(public payload: string) {
  }
}

export class UserRegister implements Action {
  readonly type = USER_REGISTER;

  constructor(public payload: RegisterModel) {
  }
}

export class UserRegisterSuccess implements Action {
  readonly type = USER_REGISTER_SUCCESS;

  constructor(public payload: string) {
  }
}

export class UserRegisterFail implements Action {
  readonly type = USER_REGISTER_FAIL;

  constructor(public payload: string) {
  }
}

export class UserLogout implements Action {
  readonly type = USER_LOGOUT;
}

export class SetModerator implements Action {
  readonly type = SET_MODERATOR;

  constructor(public id: string) {
  }
}

export class SetModeratorSuccess implements Action {
  readonly type = SET_MODERATOR_SUCCESS;

  constructor(public payload: string) {
  }
}

export class SetModeratorFail implements Action {
  readonly type = SET_MODERATOR_FAIL;

  constructor(public payload: string) {
  }
}

export class SetAdmin implements Action {
  readonly type = SET_ADMIN;

  constructor(public id: string) {
  }
}

export class SetAdminSuccess implements Action {
  readonly type = SET_ADMIN_SUCCESS;

  constructor(public payload: string) {
  }
}

export class SetAdminFail implements Action {
  readonly type = SET_ADMIN_FAIL;

  constructor(public payload: string) {
  }
}

export class GetRoles implements Action {
  readonly type = GET_ROLES;

  constructor() {
  }
}

export class GetRolesSuccess implements Action {
  readonly type = GET_ROLES_SUCCESS;

  constructor(public roles: RolesEnum[]) {
  }
}

export class GetRolesFail implements Action {
  readonly type = GET_ROLES_FAIL;

  constructor(public payload: string) {
  }
}

export class CheckValidation implements Action {
  readonly type = CHECK_VALIDATION;

  constructor() {
  }
}

export class CheckValidationSuccess implements Action {
  readonly type = CHECK_VALIDATION_SUCCESS;

  constructor(public validation: boolean) {
  }
}

export class CheckValidationFail implements Action {
  readonly type = CHECK_VALIDATION_FAIL;

  constructor(public payload: string) {
  }
}

export type Actions =
  | UserLogin
  | UserLoginSuccess
  | UserLoginFail
  | UserLogout
  | SetModerator
  | SetModeratorSuccess
  | SetModeratorFail
  | SetAdmin
  | SetAdminSuccess
  | SetAdminFail
  | GetRoles
  | GetRolesSuccess
  | GetRolesFail
  | CheckValidation
  | CheckValidationSuccess
  | CheckValidationFail

