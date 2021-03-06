import {PostModel} from "../dto/model/post.model";
import {
  FAIL_ACTION,
  GET_ALL_POST,
  GET_ALL_POST_BY_ID,
  GET_ALL_POST_BY_ID_SUCCESS,
  GET_ALL_POST_SUCCESS,
} from "../action/posts.action";
import {createFeatureSelector, createSelector} from "@ngrx/store";


export interface PostsState {
  posts: PostModel[],
  loading: boolean
}

export const INITIAL_STATE: PostsState = {
  posts: null,
  loading: false
}

export function reducer(state: PostsState = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_POST:
    case GET_ALL_POST_BY_ID:
      return {
        ...state,
        loading: true
      }

    case GET_ALL_POST_SUCCESS:
    case GET_ALL_POST_BY_ID_SUCCESS:
      return {
        posts: action.payload,
        loading: false
      }

    case FAIL_ACTION:
      return {
        ...state,
        loading: false
      }

    default:
      return state;
  }
}

export const posts = (state) => state.posts;
export const getLoading = (state) => state.loading;

const fromPostsState = createFeatureSelector<PostsState>('posts');
export const getPosts = createSelector(fromPostsState, posts)
export const isLoading = createSelector(fromPostsState, getLoading)
