import {Action} from "@ngrx/store";
import {MyProfileModel} from "../dto/response/my-profile.model";
import {MergeUserModel} from "../dto/request/merge-user.model";
import {AddressModel} from "../dto/models/address.model";
import {ContactModel} from "../dto/models/contact.model";
import {NewCarModel} from "../dto/request/new-car.model";
import {FriendUserModel} from "../dto/response/friend-user.model";


export const GET_MY_PROFILE = '[Profile] USERS_MY_PROFILE';
export const GET_MY_PROFILE_SUCCESS = '[Profile] USERS_MY_PROFILE_SUCCESS';
export const GET_MY_PROFILE_FAIL = '[Profile] USERS_MY_PROFILE_FAIL';

export const GET_MY_FRIENDS = '[Profile] GET_MY_FRIENDS';
export const GET_MY_FRIENDS_SUCCESS = '[Profile] GET_MY_FRIENDS_SUCCESS';
export const GET_MY_FRIENDS_FAIL = '[Profile] GET_MY_FRIENDS_FAIL';

export const MERGE_MY_PROFILE = '[Profile] MERGE_MY_PROFILE';
export const MERGE_MY_PROFILE_SUCCESS = '[Profile] MERGE_MY_PROFILE_SUCCESS';
export const MERGE_MY_PROFILE_FAIL = '[Profile] MERGE_MY_PROFILE_FAIL';

export const MERGE_MY_ADDRESS = '[Profile] MERGE_MY_ADDRESS';
export const MERGE_MY_ADDRESS_SUCCESS = '[Profile] MERGE_MY_ADDRESS_SUCCESS';
export const MERGE_MY_ADDRESS_FAIL = '[Profile] MERGE_MY_ADDRESS_FAIL';

export const MERGE_MY_CONTACT = '[Profile] MERGE_MY_CONTACT';
export const MERGE_MY_CONTACT_SUCCESS = '[Profile] MERGE_MY_CONTACT_SUCCESS';
export const MERGE_MY_CONTACT_FAIL = '[Profile] MERGE_MY_CONTACT_FAIL';

export const ADD_POINTS = '[Profile] ADD_POINTS';
export const ADD_POINTS_SUCCESS = '[Profile] ADD_POINTS_SUCCESS';
export const ADD_POINTS_FAIL = '[Profile] ADD_POINTS_FAIL';

export const ADD_MY_CAR = '[Profile] ADD_MY_CAR';
export const ADD_MY_CAR_SUCCESS = '[Profile] ADD_MY_CAR_SUCCESS';
export const ADD_MY_CAR_FAIL = '[Profile] ADD_MY_CAR_FAIL';

export const MERGE_MY_CAR = '[Profile] MERGE_MY_CAR';
export const MERGE_MY_CAR_SUCCESS = '[Profile] MERGE_MY_CAR_SUCCESS';
export const MERGE_MY_CAR_FAIL = '[Profile] MERGE_MY_CAR_FAIL';

export const REMOVE_MY_CAR = '[Profile] REMOVE_MY_CAR';
export const REMOVE_MY_CAR_SUCCESS = '[Profile] REMOVE_MY_CAR_SUCCESS';
export const REMOVE_MY_CAR_FAIL = '[Profile] REMOVE_MY_CAR_FAIL';

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

export class MergeMyProfile implements Action {
  readonly type = MERGE_MY_PROFILE;

  constructor(public payload: MergeUserModel) {
  }
}

export class MergeMyProfileSuccess implements Action {
  readonly type = MERGE_MY_PROFILE_SUCCESS;

  constructor(public payload: string) {
  }
}

export class MergeMyProfileFail implements Action {
  readonly type = MERGE_MY_PROFILE_FAIL;

  constructor(public payload: string) {
  }
}

export class MergeMyContact implements Action {
  readonly type = MERGE_MY_CONTACT;

  constructor(public payload: ContactModel) {
  }
}

export class MergeMyContactSuccess implements Action {
  readonly type = MERGE_MY_CONTACT_SUCCESS;

  constructor(public payload: string) {
  }
}

export class MergeMyContactFail implements Action {
  readonly type = MERGE_MY_CONTACT_FAIL;

  constructor(public payload: string) {
  }
}

export class MergeMyAddress implements Action {
  readonly type = MERGE_MY_ADDRESS;

  constructor(public payload: AddressModel) {
  }
}

export class MergeMyAddressSuccess implements Action {
  readonly type = MERGE_MY_ADDRESS_SUCCESS;

  constructor(public payload: string) {
  }
}

export class MergeMyAddressFail implements Action {
  readonly type = MERGE_MY_ADDRESS_FAIL;

  constructor(public payload: string) {
  }
}

export class AddPoints implements Action {
  readonly type = ADD_POINTS;

  constructor(public points: number) {
  }
}

export class AddPointsSuccess implements Action {
  readonly type = ADD_POINTS_SUCCESS;

  constructor(public payload: string) {
  }
}

export class AddPointsFail implements Action {
  readonly type = ADD_POINTS_FAIL;

  constructor(public payload: string) {
  }
}

export class AddMyCar implements Action {
  readonly type = ADD_MY_CAR;

  constructor(public payload: NewCarModel) {
  }
}

export class AddMyCarSuccess implements Action {
  readonly type = ADD_MY_CAR_SUCCESS;

  constructor(public payload: string) {
  }
}

export class AddMyCarFail implements Action {
  readonly type = ADD_MY_CAR_FAIL;

  constructor(public payload: string) {
  }
}

export class MergeMyCar implements Action {
  readonly type = MERGE_MY_CAR;

  constructor(public payload: NewCarModel, public id: string) {
  }
}

export class MergeMyCarSuccess implements Action {
  readonly type = MERGE_MY_CAR_SUCCESS;

  constructor(public payload: string) {
  }
}

export class MergeMyCarFail implements Action {
  readonly type = MERGE_MY_CAR_FAIL;

  constructor(public payload: string) {
  }
}

export class RemoveMyCar implements Action {
  readonly type = REMOVE_MY_CAR;

  constructor(public id: string) {
  }
}

export class RemoveMyCarSuccess implements Action {
  readonly type = REMOVE_MY_CAR_SUCCESS;

  constructor(public payload: string) {
  }
}

export class RemoveMyCarFail implements Action {
  readonly type = REMOVE_MY_CAR_FAIL;

  constructor(public payload: string) {
  }
}

export class GetMyFriends implements Action {
  readonly type = GET_MY_FRIENDS;

  constructor() {
  }
}

export class GetMyFriendsSuccess implements Action {
  readonly type = GET_MY_FRIENDS_SUCCESS

  constructor(public payload: FriendUserModel[]) {
  }
}

export class GetMyFriendsFail implements Action {
  readonly type = GET_MY_FRIENDS_FAIL;

  constructor(public payload: string) {
  }
}

export type Actions =
  | GetMyProfile
  | GetMyProfileFail
  | GetMyProfileSuccess
  | MergeMyProfile
  | MergeMyProfileSuccess
  | MergeMyProfileFail
  | MergeMyAddress
  | MergeMyAddressSuccess
  | MergeMyAddressFail
  | MergeMyContact
  | MergeMyContactSuccess
  | MergeMyContactFail
  | AddPoints
  | AddPointsSuccess
  | AddPointsFail
  | AddMyCar
  | AddMyCarSuccess
  | AddMyCarFail
  | MergeMyCar
  | MergeMyCarSuccess
  | MergeMyCarFail
  | RemoveMyCar
  | RemoveMyCarSuccess
  | RemoveMyCarFail
  | GetMyFriends
  | GetMyFriendsSuccess
  | GetMyFriendsFail

