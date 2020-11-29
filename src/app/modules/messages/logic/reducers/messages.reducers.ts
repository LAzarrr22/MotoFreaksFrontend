import {
  GET_ALL_MESSAGES_BY_USER, GET_ALL_MESSAGES_BY_USER_FAIL, GET_ALL_MESSAGES_BY_USER_SUCCESS,
  GET_ALL_MESSAGES_CHATS,
  GET_ALL_MESSAGES_CHATS_FAIL,
  GET_ALL_MESSAGES_CHATS_SUCCESS,
  GET_UNREAD_MESSAGES,
  GET_UNREAD_MESSAGES_FAIL,
  GET_UNREAD_MESSAGES_SUCCESS, SEND_MESSAGE, SEND_MESSAGE_FAIL, SEND_MESSAGE_SUCCESS
} from "../action/messages.action";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {MessageDataModel} from "../dto/response/message-data.model";
import {USER_LOGOUT} from "../../../authentication/logic/actions/authentication.actions";
import {MessageModel} from "../dto/model/message.model";

export interface MessagesState {
  chats: MessageDataModel[];
  messagesExpanded: MessageModel[];
  unread: number;
  loading: boolean;
}

export const INITIAL_STATE: MessagesState = {
  chats: null,
  messagesExpanded: null,
  unread: 0,
  loading: false
}

export function reducer(state: MessagesState = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_MESSAGES_CHATS:
      return {
        ...state,
        loading: true
      }
    case SEND_MESSAGE:
    case GET_ALL_MESSAGES_BY_USER:
      return state;

    case SEND_MESSAGE_SUCCESS:
    case GET_ALL_MESSAGES_BY_USER_SUCCESS:
      return {
        ...state,
        messagesExpanded: action.payload,
        loading: false
      }

    case GET_UNREAD_MESSAGES:
      return state;

    case GET_ALL_MESSAGES_CHATS_SUCCESS:
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

    case GET_ALL_MESSAGES_CHATS_FAIL:
    case GET_UNREAD_MESSAGES_FAIL:
    case SEND_MESSAGE_FAIL:
    case GET_ALL_MESSAGES_BY_USER_FAIL:
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

export const allChats = (state) => state.messages;
export const unreadCount = (state) => state.unread;
export const getLoading = (state) => state.loading;
export const allMessages = (state) => state.messagesExpanded;

const fromMessagesState = createFeatureSelector<MessagesState>('messages');
export const getAllChats = createSelector(fromMessagesState, allChats);
export const getUnread = createSelector(fromMessagesState, unreadCount);
export const isLoading = createSelector(fromMessagesState, getLoading);
export const getAllMessagesUser = createSelector(fromMessagesState, allMessages);

