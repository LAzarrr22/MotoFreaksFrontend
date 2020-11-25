import {
  GET_ALL_MESSAGES,
  GET_ALL_MESSAGES_FAIL,
  GET_ALL_MESSAGES_SUCCESS,
  GET_UNREAD_MESSAGES,
  GET_UNREAD_MESSAGES_FAIL,
  GET_UNREAD_MESSAGES_SUCCESS, SEND_MESSAGE, SEND_MESSAGE_FAIL, SEND_MESSAGE_SUCCESS
} from "../action/messages.action";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {MessageDataModel} from "../dto/response/message-data.model";
import {USER_LOGOUT} from "../../../authentication/logic/actions/authentication.actions";

export interface MessagesState {
  messages: MessageDataModel[];
  unread: number;
  loading: boolean;
}

export const INITIAL_STATE: MessagesState = {
  messages: null,
  unread: 0,
  loading: false
}

export function reducer(state: MessagesState = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_MESSAGES:
    case SEND_MESSAGE:
      return {
        ...state,
        loading: true
      }

    case GET_UNREAD_MESSAGES:
      return state;

    case GET_ALL_MESSAGES_SUCCESS:
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        messages: action.payload,
        loading: false
      }

    case GET_UNREAD_MESSAGES_SUCCESS:
      return {
        ...state,
        unread: action.unread
      }

    case GET_ALL_MESSAGES_FAIL:
    case GET_UNREAD_MESSAGES_FAIL:
    case SEND_MESSAGE_FAIL:
      return {
        ...state,
        loading: false
      }
    case USER_LOGOUT:
      return INITIAL_STATE;

    default:
      return state
  }
}

export const allMessages = (state) => state.messages;
export const unreadCount = (state) => state.unread;
export const getLoading = (state) => state.loading;

const fromMessagesState = createFeatureSelector<MessagesState>('messages');
export const getAllMessages = createSelector(fromMessagesState, allMessages);
export const getUnread = createSelector(fromMessagesState, unreadCount);
export const isLoading = createSelector(fromMessagesState, getLoading);

