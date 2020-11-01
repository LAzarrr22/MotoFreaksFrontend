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
  GET_ALL_POST,
  GET_ALL_POST_BY_ID,
  GetAllPostByUserId,
  GetAllPostByUserIdFail,
  GetAllPostByUserIdSuccess,
  GetAllPosts,
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
      switchMap((action: GetAllPosts) => {
        return this.postsApiService.getAllPosts(action.typeOfPosts);
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
  getAllPostsByCreatorId: Observable<Action> = this.action$
    .pipe(ofType(GET_ALL_POST_BY_ID),
      switchMap((action: GetAllPostByUserId) => {
        return this.postsApiService.getAllPostsByCreatorId(action.userId);
      }),
      switchMap((posts: PostModel[]) => [
        new GetAllPostByUserIdSuccess(posts)
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new GetAllPostByUserIdFail(error.error.message));
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
        new AddPostSuccess(response),
        new GetAllPosts()
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
