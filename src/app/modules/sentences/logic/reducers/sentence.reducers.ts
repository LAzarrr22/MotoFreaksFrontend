import {SentenceModel} from "../model/sentence.model";
import {
  ACTION_SENTENCE_FAIL,
  ACTION_SENTENCE_SUCCESS,
  DELETE_SENTENCE,
  GET_ALL_SENTENCE,
  MERGE_SENTENCE
} from "../action/sentence.actions";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export interface SentenceState {
  sentences:SentenceModel[];
  loading:boolean;
}

export const INITIAL_STATE:SentenceState={
  sentences:null,
  loading:false
}


export function reducer(state: SentenceState = INITIAL_STATE, action) {
  switch (action.type) {
    case MERGE_SENTENCE:
    case DELETE_SENTENCE:
    case GET_ALL_SENTENCE:
      return {
        ...state,
        loading:true
      }

    case ACTION_SENTENCE_SUCCESS:
      return {
        sentences: action.payload,
        loading: false
      }

    case ACTION_SENTENCE_FAIL:
      return {
        ...state,
        loading:false
      }
    default:
      return state
  }
}

export const isLoading = (state)=>state.loading;
export const sentence = (state)=>state.sentences;

const fromSentenceState = createFeatureSelector<SentenceState>('sentences-store');
export const getLoading = createSelector(fromSentenceState, isLoading)
export const getAllSentences = createSelector(fromSentenceState, sentence)
