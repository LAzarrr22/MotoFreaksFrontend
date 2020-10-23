import {PostModel} from "../dto/model/post.model";
import {
  GET_ALL_POST,
  GET_ALL_POST_BY_ID,
  GET_ALL_POST_BY_ID_FAIL,
  GET_ALL_POST_BY_ID_SUCCESS,
  GET_ALL_POST_BY_TYPE,
  GET_ALL_POST_BY_TYPE_FAIL,
  GET_ALL_POST_BY_TYPE_SUCCESS,
  GET_ALL_POST_FAIL,
  GET_ALL_POST_SUCCESS
} from "../action/posts.action";
import {createFeatureSelector, createSelector} from "@ngrx/store";


export interface PostsState {
  posts:PostModel[],
  loading: boolean
}

export const INITIAL_STATE: PostsState={
  posts:null,
    loading:false
}

export function reducer(state: PostsState= INITIAL_STATE, action) {
switch(action.type){
  case GET_ALL_POST:
  case GET_ALL_POST_BY_TYPE:
  case GET_ALL_POST_BY_ID:
  case GET_ALL_POST_FAIL:
  case GET_ALL_POST_BY_TYPE_FAIL:
  case GET_ALL_POST_BY_ID_FAIL:
    return {
      ...state,
      loading:true
    }

  case GET_ALL_POST_SUCCESS:
  case GET_ALL_POST_BY_TYPE_SUCCESS:
  case GET_ALL_POST_BY_ID_SUCCESS:
    return {
      posts:action.payload,
      loading:true
    }

  default:
    return state;
}
}

export const posts = (state) =>state.posts;

const fromPostsState = createFeatureSelector<PostsState>('posts');
export const getPosts = createSelector(fromPostsState, posts)
