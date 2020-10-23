import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {PostModel} from "../dto/model/post.model";
import {GetAllPosts} from "../action/posts.action";
import {getPosts} from "../reducers/posts.reducers";

@Injectable()
export class PostsService {

  constructor(private store: Store) {


  }

  getAllPosts(): Observable<PostModel[]> {
    this.store.dispatch(new GetAllPosts())
    return this.store.select(getPosts);
  }

}
