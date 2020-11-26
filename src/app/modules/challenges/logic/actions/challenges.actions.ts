import {Action} from "@ngrx/store";
import {ChallengeDtoModel} from "../dto/response/challenge-dto.model";
import {NewChallengeModel} from "../dto/request/new-challenge.model";
import {QuestionAnswer} from "../dto/response/question-answer.model";

export const CREATE_CHALLENGE = '[Challenge] CHALLENGES_CREATE'
export const CREATE_CHALLENGE_SUCCESS = '[Challenge] CHALLENGES_CREATE_SUCCESS'
export const CREATE_CHALLENGE_FAIL = '[Challenge] CHALLENGES_CREATE_FAIL'

export const MERGE_CHALLENGE = '[Challenge] MERGE_CHALLENGE'
export const MERGE_CHALLENGE_SUCCESS = '[Challenge] MERGE_CHALLENGE_SUCCESS'
export const MERGE_CHALLENGE_FAIL = '[Challenge] MERGE_CHALLENGE_FAIL'

export const ADD_COMPETITOR = '[Challenge] ADD_COMPETITOR'
export const ADD_COMPETITOR_SUCCESS = '[Challenge] ADD_COMPETITOR_SUCCESS'
export const ADD_COMPETITOR_FAIL = '[Challenge] ADD_COMPETITOR_FAIL'

export const DELETE_CHALLENGE = '[Challenge] DELETE_CHALLENGE'
export const DELETE_CHALLENGE_SUCCESS = '[Challenge] DELETE_CHALLENGE_SUCCESS'
export const DELETE_CHALLENGE_FAIL = '[Challenge] DELETE_CHALLENGE_FAIL'

export const GET_ALL_CHALLENGES = '[Challenge] GET_ALL_CHALLENGES'
export const GET_ALL_CHALLENGES_SUCCESS = '[Challenge] GET_ALL_CHALLENGES_SUCCESS'
export const GET_ALL_CHALLENGES_FAIL = '[Challenge] GET_ALL_CHALLENGES_FAIL'

export const GET_ALL_CHALLENGES_GENERAL = '[Challenge] GET_ALL_CHALLENGES_GENERAL'
export const GET_ALL_CHALLENGES_GENERAL_SUCCESS = '[Challenge] GET_ALL_CHALLENGES_GENERAL_SUCCESS'
export const GET_ALL_CHALLENGES_GENERAL_FAIL = '[Challenge] GET_ALL_CHALLENGES_GENERAL_FAIL'

export const GET_ALL_CHALLENGES_BY_USER = '[Challenge] GET_ALL_CHALLENGES_BY_USER'
export const GET_ALL_CHALLENGES_BY_USER_SUCCESS = '[Challenge] GET_ALL_CHALLENGES_BY_USER_SUCCESS'
export const GET_ALL_CHALLENGES_BY_USER_FAIL = '[Challenge] GET_ALL_CHALLENGES_BY_USER_FAIL'

export const GET_QUESTIONS_BY_ID = '[Challenge] GET_QUESTIONS_BY_ID'
export const GET_QUESTIONS_BY_ID_SUCCESS = '[Challenge] GET_QUESTIONS_BY_ID_SUCCESS'
export const GET_QUESTIONS_BY_ID_FAIL = '[Challenge] GET_QUESTIONS_BY_ID_FAIL'

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

export class MergeChallenge implements Action {
  readonly type = MERGE_CHALLENGE;

  constructor(public challengeId: string, public newChallenge: NewChallengeModel) {
  }
}

export class MergeChallengeSuccess implements Action {
  readonly type = MERGE_CHALLENGE_SUCCESS;

  constructor(public payload: string) {
  }
}

export class MergeChallengeFail implements Action {
  readonly type = MERGE_CHALLENGE_FAIL;

  constructor(public payload: string) {
  }
}

export class AddCompetitor implements Action {
  readonly type = ADD_COMPETITOR;

  constructor(public challengeId: string, public obtainPoints: number) {
  }
}

export class AddCompetitorSuccess implements Action {
  readonly type = ADD_COMPETITOR_SUCCESS;

  constructor(public payload: string) {
  }
}

export class AddCompetitorFail implements Action {
  readonly type = ADD_COMPETITOR_FAIL;

  constructor(public payload: string) {
  }
}

export class DeleteChallenge implements Action {
  readonly type = DELETE_CHALLENGE;

  constructor(public challengeId: string) {
  }
}

export class DeleteChallengeSuccess implements Action {
  readonly type = DELETE_CHALLENGE_SUCCESS;

  constructor(public payload: string) {
  }
}

export class DeleteChallengeFail implements Action {
  readonly type = DELETE_CHALLENGE_FAIL;

  constructor(public payload: string) {
  }
}

export class GetAllChallenges implements Action {
  readonly type = GET_ALL_CHALLENGES;

  constructor(public paramMap: Map<string, string> = null, public paramStateMap: Map<string, string> = null) {
  }
}

export class GetAllChallengesSuccess implements Action {
  readonly type = GET_ALL_CHALLENGES_SUCCESS;

  constructor(public challenges: ChallengeDtoModel[]) {
  }
}

export class GetAllChallengesFail implements Action {
  readonly type = GET_ALL_CHALLENGES_FAIL;

  constructor(public payload: string) {
  }
}

export class GetAllChallengesGeneral implements Action {
  readonly type = GET_ALL_CHALLENGES_GENERAL;

  constructor(public paramMap: Map<string, string> = null, public paramStateMap: Map<string, string> = null) {
  }
}

export class GetAllChallengesGeneralSuccess implements Action {
  readonly type = GET_ALL_CHALLENGES_GENERAL_SUCCESS;

  constructor(public challenges: ChallengeDtoModel[]) {
  }
}

export class GetAllChallengesGeneralFail implements Action {
  readonly type = GET_ALL_CHALLENGES_GENERAL_FAIL;

  constructor(public payload: string) {
  }
}

export class GetQuestionsById implements Action {
  readonly type = GET_QUESTIONS_BY_ID;

  constructor(public id: string) {
  }
}

export class GetQuestionsByIdSuccess implements Action {
  readonly type = GET_QUESTIONS_BY_ID_SUCCESS;

  constructor(public questions: QuestionAnswer[]) {
  }
}

export class GetQuestionsByIdFail implements Action {
  readonly type = GET_QUESTIONS_BY_ID_FAIL;

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

  constructor(public challenges: ChallengeDtoModel[]) {
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
  | MergeChallenge
  | MergeChallengeSuccess
  | MergeChallengeFail
  | AddCompetitor
  | AddCompetitorSuccess
  | AddCompetitorFail
  | GetAllChallenges
  | GetAllChallengesSuccess
  | GetAllChallengesFail
  | GetQuestionsById
  | GetQuestionsByIdSuccess
  | GetQuestionsByIdFail
  | GetAllChallengesByUser
  | GetAllChallengesByUserSuccess
  | GetAllChallengesByUserFail
