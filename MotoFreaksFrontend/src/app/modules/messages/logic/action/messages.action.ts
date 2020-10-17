import {Action} from "@ngrx/store";
import {MessageDataModel} from "../dto/response/message-data.model";


export const GET_ALL_MESSAGES = '[Messages] GET_ALL_MESSAGES'
export const GET_ALL_MESSAGES_SUCCESS = '[Messages] GET_ALL_MESSAGES_SUCCESS'
export const GET_ALL_MESSAGES_FAIL = '[Messages] GET_ALL_MESSAGES_FAIL'

export class GetAllMessages implements Action {
  readonly type = GET_ALL_MESSAGES;

  constructor() {
  }
}

export class GetAllMessagesSuccess implements Action {
  readonly type = GET_ALL_MESSAGES_SUCCESS;

  constructor(private payload: MessageDataModel[]) {
  }
}

export class GetAllMessagesFail implements Action {
  readonly type = GET_ALL_MESSAGES_FAIL;

  constructor(private payload: string) {
  }
}

export type Actions =
  | GetAllMessages
  | GetAllMessagesSuccess
  | GetAllMessagesFail
