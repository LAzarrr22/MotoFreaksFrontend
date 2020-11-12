import {Action} from "@ngrx/store";
import {NewPostModel} from "../dto/request/new-post.model";
import {PostModel} from "../dto/model/post.model";


export const GET_ALL_POST = '[Posts] GET_ALL_POST'
export const GET_ALL_POST_SUCCESS = '[Posts] GET_ALL_POST_SUCCESS'
export const GET_POST_FAIL = '[Posts] GET_ALL_POST_FAIL'

export const GET_ALL_POST_BY_ID = '[Posts] GET_ALL_POST_BY_ID'
export const GET_ALL_POST_BY_ID_SUCCESS = '[Posts] GET_ALL_POST_BY_ID_SUCCESS'

export const RESOLVE_POST = '[Posts] RESOLVE_POST'
export const RESOLVE_POST_SUCCESS = '[Posts] RESOLVE_POST_SUCCESS'
export const RESOLVE_POST_FAIL = '[Posts] RESOLVE_POST_FAIL'

export const DELETE_POST = '[Posts] DELETE_POST'
export const DELETE_POST_SUCCESS = '[Posts] DELETE_POST_SUCCESS'
export const DELETE_POST_FAIL = '[Posts] DELETE_POST_FAIL'

export const ADD_POST = '[Posts] ADD_POST'
export const ADD_POST_SUCCESS = '[Posts] ADD_POST_SUCCESS'
export const ADD_POST_FAIL = '[Posts] ADD_POST_FAIL'


export class GetAllPosts implements Action {
  readonly type = GET_ALL_POST;

  constructor(public typeOfPosts: string = 'ALL', public paramMap: Map<string, string> = null) {
  }
}

export class GetAllPostsSuccess implements Action {
  readonly type = GET_ALL_POST_SUCCESS;

  constructor(public payload: PostModel[]) {
  }
}

export class GetPostsFail implements Action {
  readonly type = GET_POST_FAIL;

  constructor(public payload: string) {
  }
}

export class GetAllPostByUserId implements Action {
  readonly type = GET_ALL_POST_BY_ID;

  constructor(public userId: string, public typeOfPosts: string = 'ALL', public paramMap: Map<string, string> = null) {
  }
}

export class GetAllPostByUserIdSuccess implements Action {
  readonly type = GET_ALL_POST_BY_ID_SUCCESS;

  constructor(public payload: PostModel[]) {
  }
}

export class ResolvePost implements Action {
  readonly type = RESOLVE_POST;

  constructor(public id: string) {
  }
}

export class ResolvePostSuccess implements Action {
  readonly type = RESOLVE_POST_SUCCESS;

  constructor(public payload: string) {
  }
}

export class ResolvePostFail implements Action {
  readonly type = RESOLVE_POST_FAIL;

  constructor(public payload: string) {
  }
}

export class DeletePost implements Action {
  readonly type = DELETE_POST;

  constructor(public id: string) {
  }
}

export class DeletePostSuccess implements Action {
  readonly type = DELETE_POST_SUCCESS;

  constructor(public payload: string) {
  }
}

export class DeletePostFail implements Action {
  readonly type = DELETE_POST_FAIL;

  constructor(public payload: string) {
  }
}

export class AddPost implements Action {
  readonly type = ADD_POST;

  constructor(public newPost: NewPostModel) {
  }
}

export class AddPostSuccess implements Action {
  readonly type = ADD_POST_SUCCESS;

  constructor(public payload: string) {
  }
}

export class AddPostFail implements Action {
  readonly type = ADD_POST_FAIL;

  constructor(public payload: string) {
  }
}

export type Actions =
  | GetAllPostByUserId
  | GetAllPostByUserIdSuccess
  | GetAllPosts
  | GetAllPostsSuccess
  |GetPostsFail
  | DeletePost
  | DeletePostSuccess
  | DeletePostFail
  | AddPost
  | AddPostSuccess
  | AddPostFail
