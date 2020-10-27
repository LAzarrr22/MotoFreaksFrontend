import {Action} from "@ngrx/store";
import {ChallengeModel} from "../dto/models/challenge.model";
import {NewChallengeModel} from "../dto/request/new-challenge.model";

export const CREATE_CHALLENGE = '[Challenge] CHALLENGES_CREATE'
export const CREATE_CHALLENGE_SUCCESS = '[Challenge] CHALLENGES_CREATE_SUCCESS'
export const CREATE_CHALLENGE_FAIL = '[Challenge] CHALLENGES_CREATE_FAIL'

export const GET_ALL_CHALLENGES = '[Challenge] GET_ALL_CHALLENGES'
export const GET_ALL_CHALLENGES_SUCCESS = '[Challenge] GET_ALL_CHALLENGES_SUCCESS'
export const GET_ALL_CHALLENGES_FAIL = '[Challenge] GET_ALL_CHALLENGES_FAIL'

export const GET_ALL_CHALLENGES_BY_CAR = '[Challenge] GET_ALL_CHALLENGES_BY_CAR'
export const GET_ALL_CHALLENGES_BY_CAR_SUCCESS = '[Challenge] GET_ALL_CHALLENGES_BY_CAR_SUCCESS'
export const GET_ALL_CHALLENGES_BY_CAR_FAIL = '[Challenge] GET_ALL_CHALLENGES_BY_CAR_FAIL'

export const GET_ALL_CHALLENGES_BY_ID = '[Challenge] GET_ALL_CHALLENGES_BY_ID'
export const GET_ALL_CHALLENGES_BY_ID_SUCCESS = '[Challenge] GET_ALL_CHALLENGES_BY_ID_SUCCESS'
export const GET_ALL_CHALLENGES_BY_ID_FAIL = '[Challenge] GET_ALL_CHALLENGES_BY_ID_FAIL'

export const GET_ALL_CHALLENGES_BY_USER = '[Challenge] GET_ALL_CHALLENGES_BY_USER'
export const GET_ALL_CHALLENGES_BY_USER_SUCCESS = '[Challenge] GET_ALL_CHALLENGES_BY_USER_SUCCESS'
export const GET_ALL_CHALLENGES_BY_USER_FAIL = '[Challenge] GET_ALL_CHALLENGES_BY_USER_FAIL'

export class CreateChallenge implements Action {
  readonly type = CREATE_CHALLENGE;

  constructor(public newChallenge: NewChallengeModel) {
  }
}

export class CreateChallengeSuccess implements Action {
  readonly type = CREATE_CHALLENGE_SUCCESS;

  constructor(public payload: string) {
  }
}

export class CreateChallengeFail implements Action {
  readonly type = CREATE_CHALLENGE_FAIL;

  constructor(public payload: string) {
  }
}

export class GetAllChallenges implements Action {
  readonly type = GET_ALL_CHALLENGES;

  constructor() {
  }
}

export class GetAllChallengesSuccess implements Action {
  readonly type = GET_ALL_CHALLENGES_SUCCESS;

  constructor(public challenges: ChallengeModel[]) {
  }
}

export class GetAllChallengesFail implements Action {
  readonly type = GET_ALL_CHALLENGES_FAIL;

  constructor(public payload: string) {
  }
}

export class GetAllChallengesByCar implements Action {
  readonly type = GET_ALL_CHALLENGES_BY_CAR;

  constructor(public paramMap: Map<string, string>) {
  }
}

export class GetAllChallengesByCarSuccess implements Action {
  readonly type = GET_ALL_CHALLENGES_BY_CAR_SUCCESS;

  constructor(public challenges: ChallengeModel[]) {
  }
}

export class GetAllChallengesByCarFail implements Action {
  readonly type = GET_ALL_CHALLENGES_BY_CAR_FAIL;

  constructor(public payload: string) {
  }
}

export class GetAllChallengesById implements Action {
  readonly type = GET_ALL_CHALLENGES_BY_ID;

  constructor(public id: string) {
  }
}

export class GetAllChallengesByIdSuccess implements Action {
  readonly type = GET_ALL_CHALLENGES_BY_ID_SUCCESS;

  constructor(public challenges: ChallengeModel) {
  }
}

export class GetAllChallengesByIdFail implements Action {
  readonly type = GET_ALL_CHALLENGES_BY_ID_FAIL;

  constructor(public payload: string) {
  }
}

export class GetAllChallengesByUser implements Action {
  readonly type = GET_ALL_CHALLENGES_BY_USER;

  constructor(public userId: string) {
  }
}

export class GetAllChallengesByUserSuccess implements Action {
  readonly type = GET_ALL_CHALLENGES_BY_USER_SUCCESS;

  constructor(public challenges: ChallengeModel[]) {
  }
}

export class GetAllChallengesByUserFail implements Action {
  readonly type = GET_ALL_CHALLENGES_BY_USER_FAIL;

  constructor(public payload: string) {
  }
}

export type Actions =
  | CreateChallenge
  | CreateChallengeSuccess
  | CreateChallengeFail
  | GetAllChallenges
  | GetAllChallengesSuccess
  | GetAllChallengesFail
  | GetAllChallengesByCar
  | GetAllChallengesByCarSuccess
  | GetAllChallengesByCarFail
  | GetAllChallengesById
  | GetAllChallengesByIdSuccess
  | GetAllChallengesByIdFail
  | GetAllChallengesByUser
  | GetAllChallengesByUserSuccess
  | GetAllChallengesByUserFail
