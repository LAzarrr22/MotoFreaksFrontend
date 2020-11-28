import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {PostModel} from "../dto/model/post.model";
import {
  AddComment, ApproveComment,
  DeleteComment,
  DeletePost,
  GetAllPostByUserId,
  GetAllPosts, RejectComment,
  ResolvePost
} from "../action/posts.action";
import {getPosts, isLoading} from "../reducers/posts.reducers";
import {environment} from "../../../../../environments/environment";

@Injectable()
export class PostsService {

  constructor(private store: Store) {
  }

  isLoading(){
    return this.store.select(isLoading);
  }

  getAllPosts(type: string = 'ALL', paramMap: Map<string, string> = null, paramStateMap: Map<string, string> = null): Observable<PostModel[]> {
    this.store.dispatch(new GetAllPosts(type,paramMap,paramStateMap))
    return this.store.select(getPosts);
  }

  deletePost(id: string) {
    this.store.dispatch(new DeletePost(id))
    return this.store.select(getPosts);
  }

  resolvePost(id: string) {
    this.store.dispatch(new ResolvePost(id))
    return this.store.select(getPosts);
  }

  getAllPostByCreatorId(id: string, type: string = 'ALL', paramMap: Map<string, string> = null, paramStateMap: Map<string, string> = null): Observable<PostModel[]> {
    this.store.dispatch(new GetAllPostByUserId(id,type,paramMap,paramStateMap));
    return this.store.select(getPosts);
  }

  addComment(postId: string, context:string) {
    this.store.dispatch(new AddComment(postId,context))
    return this.store.select(getPosts);
  }

  deleteComment(postId: string, commentId:string) {
    this.store.dispatch(new DeleteComment(postId,commentId))
    return this.store.select(getPosts);
  }

  approveComment(postId: string, commentId:string) {
    this.store.dispatch(new ApproveComment(postId,commentId))
    return this.store.select(getPosts);
  }

  rejectComment(postId: string, commentId:string) {
    this.store.dispatch(new RejectComment(postId,commentId))
    return this.store.select(getPosts);
  }

}
