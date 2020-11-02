import {MyProfileModel} from "../dto/response/my-profile.model";
import {
  GET_MY_FRIENDS,
  GET_MY_FRIENDS_FAIL,
  GET_MY_FRIENDS_SUCCESS,
  GET_MY_PROFILE,
  GET_MY_PROFILE_FAIL,
  GET_MY_PROFILE_SUCCESS
} from "../action/my-profile.action";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {FriendUserModel} from "../dto/response/friend-user.model";

export interface MyProfileState {
  profile: MyProfileModel;
  friends: FriendUserModel;
  loading: boolean;
}

export const INITIAL_STATE: MyProfileState = {
  profile: null,
  friends: null,
  loading: false
};

export function reducer(state: MyProfileState = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_MY_PROFILE:
    case GET_MY_FRIENDS:
      return {
        ...state,
        loading: true
      };
    case GET_MY_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      }
    case GET_MY_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        loading: false,
      }
    case GET_MY_PROFILE_FAIL:
    case GET_MY_FRIENDS_FAIL:
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
export const getFriends = (state) => state.friends;

const fromMyProfileState = createFeatureSelector<MyProfileState>('my-profile');
export const getMyProfile = createSelector(fromMyProfileState, getProfile)
export const getLoading = createSelector(fromMyProfileState, isLoading)
export const getMyFriends = createSelector(fromMyProfileState, getFriends)
