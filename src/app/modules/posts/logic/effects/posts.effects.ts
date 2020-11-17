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
  DELETE_POST,
  DeletePost, FailAction,
  GET_ALL_POST,
  GET_ALL_POST_BY_ID,
  GetAllPostByUserId,
  GetAllPostByUserIdSuccess,
  GetAllPosts,
  GetAllPostsSuccess, RESOLVE_POST, ResolvePost, SuccessActionString
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
      switchMap((action: GetAllPosts) => {
        return this.postsApiService.getAllPosts(action.typeOfPosts,action.paramMap);
      }),
      switchMap((posts: PostModel[]) => [
        new SuccessActionString(''),
        new GetAllPostsSuccess(posts)
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new FailAction(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )

  @Effect()
  getAllPostsByCreatorId: Observable<Action> = this.action$
    .pipe(ofType(GET_ALL_POST_BY_ID),
      switchMap((action: GetAllPostByUserId) => {
        return this.postsApiService.getAllPostsByCreatorId(action.userId,action.typeOfPosts,action.paramMap);
      }),
      switchMap((posts: PostModel[]) => [
        new SuccessActionString(''),
        new GetAllPostByUserIdSuccess(posts),
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new FailAction(error.error.message));
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
        new SuccessActionString(response),
        new GetAllPosts()
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new FailAction(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )

  @Effect()
  resolvePost: Observable<Action> = this.action$
    .pipe(ofType(RESOLVE_POST),
      switchMap((action: ResolvePost) => {
        return this.postsApiService.resolvePost(action.id);
      }),
      switchMap((response: string) => [
        new SuccessActionString(response)
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new FailAction(error.error.message));
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
        new SuccessActionString(response)
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new FailAction(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )
}
