import {Action} from "@ngrx/store";
import {MyProfileModel} from "../dto/response/my-profile.model";
import {MergeUserModel} from "../dto/request/merge-user.model";
import {AddressModel} from "../dto/models/address.model";
import {ContactModel} from "../dto/models/contact.model";


export const GET_MY_PROFILE = '[Users] USERS_MY_PROFILE';
export const GET_MY_PROFILE_SUCCESS = '[Users] USERS_MY_PROFILE_SUCCESS';
export const GET_MY_PROFILE_FAIL = '[Users] USERS_MY_PROFILE_FAIL';

export const MERGE_MY_PROFILE = '[Users] MERGE_MY_PROFILE';
export const MERGE_MY_PROFILE_SUCCESS = '[Users] MERGE_MY_PROFILE_SUCCESS';
export const MERGE_MY_PROFILE_FAIL = '[Users] MERGE_MY_PROFILE_FAIL';

export const MERGE_MY_ADDRESS = '[Users] MERGE_MY_ADDRESS';
export const MERGE_MY_ADDRESS_SUCCESS = '[Users] MERGE_MY_ADDRESS_SUCCESS';
export const MERGE_MY_ADDRESS_FAIL = '[Users] MERGE_MY_ADDRESS_FAIL';

export const MERGE_MY_CONTACT = '[Users] MERGE_MY_CONTACT';
export const MERGE_MY_CONTACT_SUCCESS = '[Users] MERGE_MY_CONTACT_SUCCESS';
export const MERGE_MY_CONTACT_FAIL = '[Users] MERGE_MY_CONTACT_FAIL';

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

