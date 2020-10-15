import {Action} from "@ngrx/store";
import {UserModel} from "../dto/response/user-model";

export const GET_ALL_USERS = '[Users] GET_ALL_USERS';
export const GET_ALL_USERS_SUCCESS = '[Users] GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_FAIL = '[Users] GET_ALL_USERS_FAIL';

export class GetAllUsers implements Action {
  readonly type = GET_ALL_USERS;

  constructor() {
  }
}

export class GetAllUsersSuccess implements Action {
  readonly type = GET_ALL_USERS_SUCCESS;

  constructor(public payload: UserModel[]) {
  }
}

export class GetAllUsersFail implements Action {
  readonly type = GET_ALL_USERS_FAIL;

  constructor(public payload: string) {
  }
}

export type Actions =
  | GetAllUsers
  | GetAllUsersSuccess
  | GetAllUsersFail
