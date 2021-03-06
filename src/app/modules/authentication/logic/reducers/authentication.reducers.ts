import {
  CHECK_VALIDATION, CHECK_VALIDATION_FAIL, CHECK_VALIDATION_SUCCESS,
  GET_ROLES,
  GET_ROLES_FAIL,
  GET_ROLES_SUCCESS,
  USER_LOGIN,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from "../actions/authentication.actions";
import {RolesEnum} from "../enums/roles.enum";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export interface AuthenticationState {
  token: string;
  loggedIn: boolean;
  isValidated:boolean;
  roles: RolesEnum[];
  loading: boolean;
}

const INITIAL_STATE: AuthenticationState = {
  token: null,
  loggedIn: false,
  isValidated:false,
  roles: [RolesEnum.UNKNOWN],
  loading:false
};

export function reducer(state: AuthenticationState = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_LOGIN:
    case GET_ROLES:
    case CHECK_VALIDATION:
      return {
        ...state,
        loading:true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loggedIn: true,
        loading:false,
        token: action.payload.token,
        roles: action.payload.roles,
        isValidated: action.payload.validated
      };
    case GET_ROLES_SUCCESS:
      return {
        ...state,
        roles: action.roles
      }
    case CHECK_VALIDATION_SUCCESS:
      return {
        ...state,
        isValidated: action.validation
      }
    case GET_ROLES_FAIL:
    case CHECK_VALIDATION_FAIL:
      return state;

    case USER_LOGIN_FAIL:
     case USER_LOGOUT:
      return INITIAL_STATE;

    default:
      return state;
  }

}

export const getToken = (state) => state.token;
export const isLoggedIn = (state) => state.loggedIn;
export const roles = (state) => state.roles;
export const getUserValidation = (state) => state.isValidated;
export const getLoading = (state) => state.loading;


const fromAuthenticationState = createFeatureSelector<AuthenticationState>('authentication');

export const getAuthToken = createSelector(fromAuthenticationState, getToken);
export const getRoles = createSelector(fromAuthenticationState, roles);
export const isUserLoggedIn = createSelector(fromAuthenticationState, isLoggedIn);
export const isValidated = createSelector(fromAuthenticationState, getUserValidation);
export const isLoading = createSelector(fromAuthenticationState, getLoading);
