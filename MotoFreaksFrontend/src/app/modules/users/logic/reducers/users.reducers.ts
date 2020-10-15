import {UserModel} from "../dto/response/user-model";
import {GET_ALL_USERS, GET_ALL_USERS_FAIL, GET_ALL_USERS_SUCCESS} from "../action/user.action";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export interface UsersState {
  users: UserModel[];
  loading: boolean;
}

export const INITIAL_STATE: UsersState = {
  users: null,
  loading: false,
}

export function reducer(state: UsersState = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        loading: true
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        users: action.payload,
        loading: false,
      };
    case GET_ALL_USERS_FAIL:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}

export const isLoading = (state) => state.loading;
export const users = (state) => state.users;

const fromUsersState = createFeatureSelector<UsersState>('users');
export const getAllUsers = createSelector(fromUsersState, users);
