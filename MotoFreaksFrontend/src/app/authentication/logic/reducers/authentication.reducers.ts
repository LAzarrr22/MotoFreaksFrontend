import {USER_LOGIN, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_LOGOUT} from "../actions/authentication.actions";

export interface State {
  token: string;
  loggedIn: boolean;
  roles: string[];
}

const INITIAL_STATE: State = {
  token: null,
  loggedIn: false,
  roles: []
};

export function reducer(state: State = INITIAL_STATE, action) {
  switch (action.type) {

    case USER_LOGIN:
      return {
        ...state,
        loggedIn: true
      };
    case USER_LOGIN_SUCCESS:
      console.log(action.payload.token)
      return {
        loggedIn: true,
        token: action.payload.token,
        roles: action.payload.roles
      };

    case USER_LOGIN_FAIL:
      return INITIAL_STATE;

    case USER_LOGOUT:
      return INITIAL_STATE;

    default:
      return state;
  }

}

export const getAuthToken = (state) => state.token;
export const isLoggedIn = (state) => state.loggedIn;
export const getRoles = (state) => state.roles;
