import {ChallengeDtoModel} from "../dto/response/challenge-dto.model";
import {
  GET_ALL_CHALLENGES,
  GET_ALL_CHALLENGES_BY_CAR,
  GET_ALL_CHALLENGES_BY_CAR_FAIL,
  GET_ALL_CHALLENGES_BY_CAR_SUCCESS,
  GET_ALL_CHALLENGES_BY_USER,
  GET_ALL_CHALLENGES_BY_USER_FAIL,
  GET_ALL_CHALLENGES_BY_USER_SUCCESS,
  GET_ALL_CHALLENGES_FAIL,
  GET_ALL_CHALLENGES_GENERAL,
  GET_ALL_CHALLENGES_GENERAL_FAIL,
  GET_ALL_CHALLENGES_GENERAL_SUCCESS,
  GET_ALL_CHALLENGES_SUCCESS,
  GET_QUESTIONS_BY_ID,
  GET_QUESTIONS_BY_ID_FAIL,
  GET_QUESTIONS_BY_ID_SUCCESS
} from "../actions/challenges.actions";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {QuestionAnswer} from "../dto/response/question-answer.model";

export interface ChallengesState {
  challengesList: ChallengeDtoModel[],
  selectedQuestions: QuestionAnswer[],
  loading: boolean
}

export const INITIAL_STATE: ChallengesState = {
  challengesList: null,
  selectedQuestions: null,
  loading: false
}

export function reducer(state: ChallengesState = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_CHALLENGES_BY_CAR:
    case GET_ALL_CHALLENGES_BY_USER:
    case GET_ALL_CHALLENGES:
    case GET_ALL_CHALLENGES_GENERAL:
    case GET_QUESTIONS_BY_ID:
      return {
        ...state,
        loading: true
      }
    case GET_ALL_CHALLENGES_BY_CAR_SUCCESS:
    case GET_ALL_CHALLENGES_BY_USER_SUCCESS:
    case GET_ALL_CHALLENGES_SUCCESS:
    case GET_ALL_CHALLENGES_GENERAL_SUCCESS:
      return {
        ...state,
        challengesList: action.challenges,
        loading: false
      }

    case GET_QUESTIONS_BY_ID_SUCCESS:
      return {
        ...state,
        selectedQuestions: action.questions,
        loading: false
      }
    case GET_ALL_CHALLENGES_BY_CAR_FAIL:
    case GET_ALL_CHALLENGES_BY_USER_FAIL:
    case GET_ALL_CHALLENGES_FAIL:
    case GET_QUESTIONS_BY_ID_FAIL:
    case GET_ALL_CHALLENGES_GENERAL_FAIL:
      return {
        ...state,
        loading: true
      }
    default:
      return state

  }
}

export const challengesList = (state) => state.challengesList;
export const selectedQuestions = (state) => state.selectedQuestions;

const fromChallengeState = createFeatureSelector<ChallengesState>('challenge-store');
export const getAllChallenges = createSelector(fromChallengeState, challengesList);
export const getSelectedQuestions = createSelector(fromChallengeState, selectedQuestions);

