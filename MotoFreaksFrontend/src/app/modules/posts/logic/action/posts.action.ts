import {Action} from "@ngrx/store";
import {NewPostModel} from "../dto/request/new-post.model";
import {PostModel} from "../dto/model/post.model";
import {PostType} from "../enums/post-type.enum";


export const GET_ALL_POST = '[Posts] GET_ALL_POST'
export const GET_ALL_POST_SUCCESS = '[Posts] GET_ALL_POST_SUCCESS'
export const GET_ALL_POST_FAIL = '[Posts] GET_ALL_POST_FAIL'

export const GET_ALL_MY_POST = '[Posts] GET_ALL_MY_POST'
export const GET_ALL_MY_POST_SUCCESS = '[Posts] GET_ALL_MY_POST_SUCCESS'
export const GET_ALL_MY_POST_FAIL = '[Posts] GET_ALL_MY_POST_FAIL'

export const GET_ALL_POST_BY_ID = '[Posts] GET_ALL_POST_BY_ID'
export const GET_ALL_POST_BY_ID_SUCCESS = '[Posts] GET_ALL_POST_BY_ID_SUCCESS'
export const GET_ALL_POST_BY_ID_FAIL = '[Posts] GET_ALL_POST_BY_ID_FAIL'

export const GET_ALL_POST_BY_TYPE = '[Posts] GET_ALL_POST_BY_TYPE'
export const GET_ALL_POST_BY_TYPE_SUCCESS = '[Posts] GET_ALL_POST_BY_TYPE_SUCCESS'
export const GET_ALL_POST_BY_TYPE_FAIL = '[Posts] GET_ALL_POST_BY_TYPE_FAIL'

export const DELETE_POST = '[Posts] DELETE_POST'
export const DELETE_POST_SUCCESS = '[Posts] DELETE_POST_SUCCESS'
export const DELETE_POST_FAIL = '[Posts] DELETE_POST_FAIL'

export const ADD_POST = '[Posts] ADD_POST'
export const ADD_POST_SUCCESS = '[Posts] ADD_POST_SUCCESS'
export const ADD_POST_FAIL = '[Posts] ADD_POST_FAIL'


export class GetAllPosts implements Action {
  readonly type = GET_ALL_POST;

  constructor() {
  }
}

export class GetAllPostsSuccess implements Action {
  readonly type = GET_ALL_POST_SUCCESS;

  constructor(public payload: PostModel[]) {
  }
}

export class GetAllPostsFail implements Action {
  readonly type = GET_ALL_POST_FAIL;

  constructor(public payload: string) {
  }
}

export class GetAllMyPosts implements Action {
  readonly type = GET_ALL_MY_POST;

  constructor() {
  }
}

export class GetAllMyPostsSuccess implements Action {
  readonly type = GET_ALL_MY_POST_SUCCESS;

  constructor(public payload: PostModel[]) {
  }
}

export class GetAllMyPostsFail implements Action {
  readonly type = GET_ALL_MY_POST_FAIL;

  constructor(public payload: string) {
  }
}

export class GetAllPostById implements Action {
  readonly type = GET_ALL_POST_BY_ID;

  constructor(public id: string) {
  }
}

export class GetAllPostByIdSuccess implements Action {
  readonly type = GET_ALL_POST_BY_ID_SUCCESS;

  constructor(public payload: PostModel[]) {
  }
}

export class GetAllPostByIdFail implements Action {
  readonly type = GET_ALL_POST_BY_ID_FAIL;

  constructor(public payload: string) {
  }
}


export class GetAllPostByType implements Action {
  readonly type = GET_ALL_POST_BY_TYPE;

  constructor(public typePost: PostType) {
  }
}

export class GetAllPostByTypeSuccess implements Action {
  readonly type = GET_ALL_POST_BY_TYPE_SUCCESS;

  constructor(public payload: PostModel[]) {
  }
}

export class GetAllPostByTypeFail implements Action {
  readonly type = GET_ALL_POST_BY_TYPE_FAIL;

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
  | GetAllMyPosts
  | GetAllMyPostsSuccess
  | GetAllMyPostsFail
  | GetAllPostById
  | GetAllPostByIdSuccess
  | GetAllPostByIdFail
  | GetAllPosts
  | GetAllPostsSuccess
  | GetAllPostsFail
  | GetAllPostByType
  | GetAllPostByTypeSuccess
  | GetAllPostByTypeFail
  | DeletePost
  | DeletePostSuccess
  | DeletePostFail
  | AddPost
  | AddPostSuccess
  | AddPostFail
