import * as fromAuthentication from './reducers/authentication.reducers';
import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";

export interface AuthenticationState {
  auth: fromAuthentication.State;

}

export const reducers: ActionReducerMap<AuthenticationState> = {
  auth: fromAuthentication.reducer
};


const fromAuthenticationState = createFeatureSelector<AuthenticationState>('authentication');
const fromAuthState = createSelector(fromAuthenticationState, state => state.auth);

export const getAuthToken = createSelector(fromAuthState, fromAuthentication.getAuthToken);
export const getRoles = createSelector(fromAuthState, fromAuthentication.getRoles);
export const isUserLoggedIn = createSelector(fromAuthState, fromAuthentication.isLoggedIn);
