import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {PostModel} from "../dto/model/post.model";
import {DeletePost, GetAllPosts} from "../action/posts.action";
import {getPosts} from "../reducers/posts.reducers";

@Injectable()
export class PostsService {

  constructor(private store: Store) {
  }

  getAllPosts(type: string = 'ALL'): Observable<PostModel[]> {
    this.store.dispatch(new GetAllPosts(type))
    return this.store.select(getPosts);
  }

  deletePost(id: string) {
    this.store.dispatch(new DeletePost(id))
    return this.store.select(getPosts);
  }

}
