import {Action} from "@ngrx/store";
import {MyProfileModel} from "../dto/response/my-profile.model";


export const GET_MY_PROFILE = '[Users] USERS_MY_PROFILE';
export const GET_MY_PROFILE_SUCCESS = '[Users] USERS_MY_PROFILE_SUCCESS';
export const GET_MY_PROFILE_FAIL = '[Users] USERS_MY_PROFILE_FAIL';


export class GetMyProfile implements Action {
  readonly type = GET_MY_PROFILE;

  constructor() {
  }
}

export class GetMyProfileSuccess implements Action {
  readonly type = GET_MY_PROFILE_SUCCESS;

  constructor(public payload: MyProfileModel) {
  }
}

export class GetMyProfileFail implements Action {
  readonly type = GET_MY_PROFILE_FAIL;

  constructor(public payload: string) {
  }
}


export type Actions =
  | GetMyProfile
  | GetMyProfileFail
  | GetMyProfileSuccess

