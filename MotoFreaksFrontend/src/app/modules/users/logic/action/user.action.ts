import {Action} from "@ngrx/store";
import {UserModel} from "../dto/response/user-model";

export const GET_ALL_USERS = '[Users] GET_ALL_USERS';
export const GET_ALL_USERS_SUCCESS = '[Users] GET_ALL_USERS_SUCCESS';
export const GET_ALL_USERS_FAIL = '[Users] GET_ALL_USERS_FAIL';

export const ADD_FRIEND = '[Users] ADD_FRIEND';
export const ADD_FRIEND_SUCCESS = '[Users] ADD_FRIEND_SUCCESS';
export const ADD_FRIEND_FAIL = '[Users] ADD_FRIEND_FAIL';

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

export class AddFriend implements Action {
  readonly type = ADD_FRIEND;

  constructor(public id: string) {
  }
}

export class AddFriendSuccess implements Action {
  readonly type = ADD_FRIEND_SUCCESS;

  constructor(public payload: string) {
  }
}

export class AddFriendFail implements Action {
  readonly type = ADD_FRIEND_FAIL;

  constructor(public payload: string) {
  }
}

export type Actions =
  | GetAllUsers
  | GetAllUsersSuccess
  | GetAllUsersFail
  | AddFriend
  | AddFriendSuccess
  | AddFriendFail
