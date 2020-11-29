import {Action} from "@ngrx/store";
import {MessageDataModel} from "../dto/response/message-data.model";
import {MessageModel} from "../dto/model/message.model";

export const GET_UNREAD_MESSAGES = '[Messages] GET_UNREAD_MESSAGES'
export const GET_UNREAD_MESSAGES_SUCCESS = '[Messages] GET_UNREAD_MESSAGES_SUCCESS'
export const GET_UNREAD_MESSAGES_FAIL = '[Messages] GET_UNREAD_MESSAGES_FAIL'

export const GET_ALL_MESSAGES_CHATS = '[Messages] GET_ALL_MESSAGES'
export const GET_ALL_MESSAGES_CHATS_SUCCESS = '[Messages] GET_ALL_MESSAGES_SUCCESS'
export const GET_ALL_MESSAGES_CHATS_FAIL = '[Messages] GET_ALL_MESSAGES_FAIL'

export const GET_ALL_MESSAGES_BY_USER = '[Messages] GET_ALL_MESSAGES_BY_USER'
export const GET_ALL_MESSAGES_BY_USER_SUCCESS = '[Messages] GET_ALL_MESSAGES_BY_USER_SUCCESS'
export const GET_ALL_MESSAGES_BY_USER_FAIL = '[Messages] GET_ALL_MESSAGES_BY_USER_FAIL'

export const SEND_MESSAGE = '[Messages] SEND_MESSAGE'
export const SEND_MESSAGE_SUCCESS = '[Messages] SEND_MESSAGE_SUCCESS'
export const SEND_MESSAGE_FAIL = '[Messages] SEND_MESSAGE_FAIL'

export const READ_MESSAGES = '[Messages] READ_MESSAGES'
export const READ_MESSAGES_SUCCESS = '[Messages] READ_MESSAGES_SUCCESS'
export const READ_MESSAGES_FAIL = '[Messages] READ_MESSAGES_FAIL'

export class GetUnreadMessages implements Action {
  readonly type = GET_UNREAD_MESSAGES;

  constructor() {
  }
}

export class GetUnreadMessagesSuccess implements Action {
  readonly type = GET_UNREAD_MESSAGES_SUCCESS;

  constructor(public unread: number) {
  }
}

export class GetUnreadMessagesFail implements Action {
  readonly type = GET_UNREAD_MESSAGES_FAIL;

  constructor(public payload: string) {
  }
}

export class GetAllChatsMessages implements Action {
  readonly type = GET_ALL_MESSAGES_CHATS;

  constructor() {
  }
}

export class GetAllChatsMessagesSuccess implements Action {
  readonly type = GET_ALL_MESSAGES_CHATS_SUCCESS;

  constructor(public payload: MessageDataModel[]) {
  }
}

export class GetAllChatsMessagesFail implements Action {
  readonly type = GET_ALL_MESSAGES_CHATS_FAIL;

  constructor(public payload: string) {
  }
}


export class GetAllMessagesByUser implements Action {
  readonly type = GET_ALL_MESSAGES_BY_USER;

  constructor(public id:string) {
  }
}

export class GetAllMessagesByUserSuccess implements Action {
  readonly type = GET_ALL_MESSAGES_BY_USER_SUCCESS;

  constructor(public payload: MessageModel[]) {
  }
}

export class GetAllMessagesByUserFail implements Action {
  readonly type = GET_ALL_MESSAGES_BY_USER_FAIL;

  constructor(public payload: string) {
  }
}

export class SendMessage implements Action {
  readonly type = SEND_MESSAGE;

  constructor(public id: string, public content: string) {
  }
}

export class SendMessageSuccess implements Action {
  readonly type = SEND_MESSAGE_SUCCESS;

  constructor(public payload: MessageDataModel[]) {
  }
}

export class SendMessageFail implements Action {
  readonly type = SEND_MESSAGE_FAIL;

  constructor(public payload: string) {
  }
}

export class ReadMessages implements Action {
  readonly type = READ_MESSAGES;

  constructor(public id: string) {
  }
}

export class ReadMessagesSuccess implements Action {
  readonly type = READ_MESSAGES_SUCCESS;

  constructor(public payload: string) {
  }
}

export class ReadMessagesFail implements Action {
  readonly type = READ_MESSAGES_FAIL;

  constructor(public payload: string) {
  }
}

export type Actions =
  | GetAllChatsMessages
  | GetAllChatsMessagesSuccess
  | GetAllChatsMessagesFail
  | SendMessage
  | SendMessageSuccess
  | SendMessageFail
  | ReadMessages
  | ReadMessagesSuccess
  | ReadMessagesFail
  | GetUnreadMessages
  | GetUnreadMessagesSuccess
  | GetUnreadMessagesFail

