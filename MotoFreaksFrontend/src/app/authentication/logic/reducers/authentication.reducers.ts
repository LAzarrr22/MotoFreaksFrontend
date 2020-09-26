import {USER_LOGIN, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_LOGOUT} from "../actions/authentication.actions";
import {RolesEnum} from "../enums/roles.enum";

export interface State {
  token: string;
  loggedIn: boolean;
  roles: [RolesEnum];
}

const INITIAL_STATE: State = {
  token: null,
  loggedIn: false,
  roles: [RolesEnum.UNKNOWN]
};

export function reducer(state: State = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state
      };
    case USER_LOGIN_SUCCESS:
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
