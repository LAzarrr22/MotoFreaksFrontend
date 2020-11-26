import {Action} from "@ngrx/store";
import {NewPostModel} from "../dto/request/new-post.model";
import {PostModel} from "../dto/model/post.model";


export const GET_ALL_POST = '[Posts] GET_ALL_POST'
export const GET_ALL_POST_SUCCESS = '[Posts] GET_ALL_POST_SUCCESS'

export const GET_ALL_POST_BY_ID = '[Posts] GET_ALL_POST_BY_ID'
export const GET_ALL_POST_BY_ID_SUCCESS = '[Posts] GET_ALL_POST_BY_ID_SUCCESS'

export const RESOLVE_POST = '[Posts] RESOLVE_POST'
export const DELETE_POST = '[Posts] DELETE_POST'
export const ADD_POST = '[Posts] ADD_POST'
export const ADD_COMMENT = '[Posts] ADD_COMMENT'
export const DELETE_COMMENT = '[Posts] DELETE_COMMENT'
export const APPROVE_COMMENT = '[Posts] APPROVE_COMMENT'
export const REJECT_COMMENT = '[Posts] REJECT_COMMENT'

export const SUCCESS_ACTION_STRING = '[Posts] SUCCESS_ACTION_STRING'
export const FAIL_ACTION = '[Posts] FAIL_ACTION'

export class GetAllPosts implements Action {
  readonly type = GET_ALL_POST;

  constructor(public typeOfPosts: string = 'ALL', public paramMap: Map<string, string> = null, public paramStateMap: Map<string, string> = null) {
  }
}

export class GetAllPostsSuccess implements Action {
  readonly type = GET_ALL_POST_SUCCESS;

  constructor(public payload: PostModel[]) {
  }
}

export class GetAllPostByUserId implements Action {
  readonly type = GET_ALL_POST_BY_ID;

  constructor(public userId: string, public typeOfPosts: string = 'ALL', public paramMap: Map<string, string> = null, public paramStateMap: Map<string, string> = null) {
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

export class DeletePost implements Action {
  readonly type = DELETE_POST;

  constructor(public id: string) {
  }
}

export class AddPost implements Action {
  readonly type = ADD_POST;

  constructor(public newPost: NewPostModel) {
  }
}

export class AddComment implements Action {
  readonly type = ADD_COMMENT;

  constructor(public postId: string, public context: string) {
  }
}

export class DeleteComment implements Action {
  readonly type = DELETE_COMMENT;

  constructor(public postId: string, public commentId: string) {
  }
}

export class ApproveComment implements Action {
  readonly type = APPROVE_COMMENT;

  constructor(public postId: string, public commentId: string) {
  }
}


export class RejectComment implements Action {
  readonly type = REJECT_COMMENT;

  constructor(public postId: string, public commentId: string) {
  }
}

export class SuccessActionString implements Action {
  readonly type = SUCCESS_ACTION_STRING;

  constructor(public payload: string) {
  }
}

export class FailAction implements Action {
  readonly type = FAIL_ACTION;

  constructor(public payload: string) {
  }
}

export type Actions =
  | GetAllPostByUserId
  | GetAllPostByUserIdSuccess
  | GetAllPosts
  | GetAllPostsSuccess
  | DeletePost
  | AddPost
  | AddComment
  | DeleteComment
  | ApproveComment
  | RejectComment
  | SuccessActionString
  | FailAction
