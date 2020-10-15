import {MyProfileModel} from "../dto/response/my-profile.model";
import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {GET_MY_PROFILE, GET_MY_PROFILE_FAIL, GET_MY_PROFILE_SUCCESS} from "../action/my-profile.action";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export interface MyProfileState {
  profile: MyProfileModel;
  loading: boolean;
}

export const adapter: EntityAdapter<MyProfileModel> = createEntityAdapter<MyProfileModel>();

export const INITIAL_STATE: MyProfileState = {
  profile: null,
  loading: false
};

export function reducer(state: MyProfileState = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_MY_PROFILE:
      return {
        ...state,
        loading: true
      };
    case GET_MY_PROFILE_SUCCESS:
      return {
        profile: action.payload,
        loading: false,
      }

    case GET_MY_PROFILE_FAIL:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}


export const isLoading = (state) => state.loading;
export const getProfile = (state) => state.profile;

const fromMyProfileState = createFeatureSelector<MyProfileState>('my-profile');
export const getMyProfile = createSelector(fromMyProfileState, getProfile)
export const getLoading = createSelector(fromMyProfileState, isLoading)
