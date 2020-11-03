import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {PostModel} from "../dto/model/post.model";
import {DeletePost, GetAllPostByUserId, GetAllPosts} from "../action/posts.action";
import {getPosts} from "../reducers/posts.reducers";

@Injectable()
export class PostsService {

  constructor(private store: Store) {
  }

  getAllPosts(type: string = 'ALL', paramMap: Map<string, string> = null): Observable<PostModel[]> {
    this.store.dispatch(new GetAllPosts(type,paramMap))
    return this.store.select(getPosts);
  }

  deletePost(id: string) {
    this.store.dispatch(new DeletePost(id))
    return this.store.select(getPosts);
  }

  getAllPostByCreatorId(id: string): Observable<PostModel[]> {
    this.store.dispatch(new GetAllPostByUserId(id));
    return this.store.select(getPosts);
  }

}
