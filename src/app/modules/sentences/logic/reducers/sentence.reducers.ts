import {SentenceModel} from "../model/sentence.model";
import {
  ACTION_SENTENCE_FAIL,
  ACTION_SENTENCE_SUCCESS,
  ADD_SENTENCE,
  DELETE_SENTENCE,
  GET_ALL_SENTENCE,
  MERGE_SENTENCE
} from "../action/sentence.actions";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export interface SentenceState {
  sentenceList:SentenceModel[];
  loading:boolean;
}

export const INITIAL_STATE:SentenceState={
  sentenceList:null,
  loading:false
}


export function reducer(state: SentenceState = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_SENTENCE:
    case MERGE_SENTENCE:
    case DELETE_SENTENCE:
    case GET_ALL_SENTENCE:
      return {
        ...state,
        loading:true
      }

    case ACTION_SENTENCE_SUCCESS:{
      return {
        sentenceList: action.payload,
        loading: false
      }
    }
    case ACTION_SENTENCE_FAIL:{
      return {
        ...state,
        loading:false
      }
    }
  }
}

export const isLoading = (state) => state.loading;
export const sentence = (state) => state.sentenceList;

const fromSentenceState = createFeatureSelector<SentenceState>('sentences');
export const getLoading = createSelector(fromSentenceState, isLoading)
export const getAllSentences = createSelector(fromSentenceState, sentence)
