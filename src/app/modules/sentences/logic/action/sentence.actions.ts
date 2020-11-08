import {Action} from "@ngrx/store";
import {NewSentenceModel} from "../model/new-sentence.model";
import {SentenceModel} from "../model/sentence.model";


export const GET_ALL_SENTENCE='[Sentence] GET_ALL_SENTENCE'
export const ADD_SENTENCE='[Sentence] ADD_SENTENCE'
export const MERGE_SENTENCE='[Sentence] MERGE_SENTENCE'
export const DELETE_SENTENCE='[Sentence] DELETE_SENTENCE'

export const ACTION_SENTENCE_SUCCESS='[Sentence] ACTION_SENTENCE_SUCCESS'
export const ACTION_SENTENCE_FAIL='[Sentence] ACTION_SENTENCE_FAIL'


export class GetAllSentences implements Action {
  readonly type = GET_ALL_SENTENCE;

  constructor() {
  }
}
export class AddSentence implements Action {
  readonly type = ADD_SENTENCE;

  constructor(public newSentence: NewSentenceModel) {
  }
}

export class MergeSentence implements Action {
  readonly type = MERGE_SENTENCE;

  constructor(public idSentence: string, public newSentence: NewSentenceModel) {
  }
}

export class DeleteSentence implements Action {
  readonly type = DELETE_SENTENCE;

  constructor(public idSentence: string) {
  }
}

export class SentenceSuccess implements Action {
  readonly type = ACTION_SENTENCE_SUCCESS;

  constructor(public payload: SentenceModel[]) {
  }
}

export class SentenceFail implements Action {
  readonly type = ACTION_SENTENCE_FAIL;

  constructor(public payload: string) {
  }
}

