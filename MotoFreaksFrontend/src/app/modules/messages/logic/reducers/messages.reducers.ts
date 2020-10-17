import {GET_ALL_MESSAGES, GET_ALL_MESSAGES_FAIL, GET_ALL_MESSAGES_SUCCESS} from "../action/messages.action";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {MessageDataModel} from "../dto/response/message-data.model";

export interface MessagesState {
  messages: MessageDataModel[];
  loading: boolean;
}

export const INITIAL_STATE: MessagesState = {
  messages: null,
  loading: false
}

export function reducer(state: MessagesState = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_MESSAGES:
      return {
        ...state,
        loading: true
      }

    case GET_ALL_MESSAGES_SUCCESS:
      return {
        messages: action.payload,
        loading: false
      }

    case GET_ALL_MESSAGES_FAIL:
      return {
        ...state,
        loading: false
      }

    default:
      return state
  }
}

export const allMessages = (state) => state.messages;
const fromMessagesState = createFeatureSelector<MessagesState>('messages');
export const getAllMessages = createSelector(fromMessagesState, allMessages);
