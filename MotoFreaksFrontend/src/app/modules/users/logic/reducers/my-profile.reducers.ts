import {MyProfileModel} from "../dto/response/my-profile.model";
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {GET_MY_PROFILE, GET_MY_PROFILE_FAIL, GET_MY_PROFILE_SUCCESS} from "../action/my-profile.action";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export interface MyProfileState extends EntityState<MyProfileModel> {
  loading: boolean;
}

export const adapter: EntityAdapter<MyProfileModel> = createEntityAdapter<MyProfileModel>();

export const INITIAL_STATE: MyProfileState = adapter.getInitialState({
  loading: false
});

export function reducer(state: MyProfileState = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_MY_PROFILE:
      return {
        ...state,
        loading: true
      };
    case GET_MY_PROFILE_SUCCESS:
      return adapter.updateOne(action.payload, {...state, loading: false});

    case GET_MY_PROFILE_FAIL:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}


export const getProfile = (state) => state;

const fromMyProfileState = createFeatureSelector<MyProfileState>('my-profile');
export const getMyProfile = createSelector(fromMyProfileState, getProfile)
