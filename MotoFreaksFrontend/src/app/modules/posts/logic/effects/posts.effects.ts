import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Action, Store} from "@ngrx/store";
import {CommonComponentsService} from "../../../common/common.service";
import {PostsApiService} from "../services/posts-api.service";
import {Observable} from "rxjs";
import {PostModel} from "../dto/model/post.model";
import {
  ADD_POST,
  AddPost,
  AddPostFail,
  AddPostSuccess,
  DELETE_POST,
  DeletePost,
  DeletePostFail,
  DeletePostSuccess,
  GET_ALL_MY_POST,
  GET_ALL_POST,
  GET_ALL_POST_BY_ID,
  GET_ALL_POST_BY_TYPE,
  GetAllMyPostsFail,
  GetAllMyPostsSuccess,
  GetAllPostById,
  GetAllPostByIdFail,
  GetAllPostByIdSuccess,
  GetAllPostByType,
  GetAllPostByTypeFail,
  GetAllPostByTypeSuccess,
  GetAllPostsFail,
  GetAllPostsSuccess
} from "../action/posts.action";
import {catchError, switchMap} from "rxjs/operators";

@Injectable()
export class PostsEffects {
  constructor(private action$: Actions, private store$: Store
    , private errorService: CommonComponentsService, private postsApiService: PostsApiService) {
  }

  @Effect()
  getAllPosts: Observable<Action> = this.action$
    .pipe(ofType(GET_ALL_POST),
      switchMap(() => {
        return this.postsApiService.getAllPosts();
      }),
      switchMap((posts: PostModel[]) => [
        new GetAllPostsSuccess(posts)
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new GetAllPostsFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )

  @Effect()
  getAllPostsById: Observable<Action> = this.action$
    .pipe(ofType(GET_ALL_POST_BY_ID),
      switchMap((action: GetAllPostById) => {
        return this.postsApiService.getAllPostsById(action.id);
      }),
      switchMap((posts: PostModel[]) => [
        new GetAllPostByIdSuccess(posts)
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new GetAllPostByIdFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )

  @Effect()
  getAllPostsByType: Observable<Action> = this.action$
    .pipe(ofType(GET_ALL_POST_BY_TYPE),
      switchMap((action: GetAllPostByType) => {
        return this.postsApiService.getAllPostsByType(action.typePost);
      }),
      switchMap((posts: PostModel[]) => [
        new GetAllPostByTypeSuccess(posts)
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new GetAllPostByTypeFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )

  @Effect()
  getAllMyPosts: Observable<Action> = this.action$
    .pipe(ofType(GET_ALL_MY_POST),
      switchMap(() => {
        return this.postsApiService.getAllMyPosts();
      }),
      switchMap((posts: PostModel[]) => [
        new GetAllMyPostsSuccess(posts)
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new GetAllMyPostsFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )

  @Effect()
  addPost: Observable<Action> = this.action$
    .pipe(ofType(ADD_POST),
      switchMap((action: AddPost) => {
        return this.postsApiService.addPost(action.newPost);
      }),
      switchMap((response: string) => [
        new AddPostSuccess(response)
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new AddPostFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )


  @Effect()
  deletePost: Observable<Action> = this.action$
    .pipe(ofType(DELETE_POST),
      switchMap((action: DeletePost) => {
        return this.postsApiService.deletePost(action.id);
      }),
      switchMap((response: string) => [
        new DeletePostSuccess(response)
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new DeletePostFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )
}
