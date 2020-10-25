import {HttpClient} from "@angular/common/http";
import {NewPostModel} from "../dto/request/new-post.model";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {PostModel} from "../dto/model/post.model";
import {Injectable} from "@angular/core";


@Injectable()
export class PostsApiService {

  constructor(private httpClient: HttpClient) {
  }

  addPost(newPost: NewPostModel) {
    return this.httpClient.post(`${environment.apiUrl}/posts/add`, {
      type: newPost.type,
      title: newPost.title,
      body: newPost.body,
      location: newPost.location,
      car: newPost.car
    })
  }

  deletePost(id: string) {
    return this.httpClient.delete(`${environment.apiUrl}/posts/delete/${id}`);
  }

  getAllPosts(type: string): Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>(`${environment.apiUrl}/posts/get/${type}`)
  }

  getAllMyPosts(): Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>(`${environment.apiUrl}/posts/my-posts`)
  }

  getAllPostsById(id: string): Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>(`${environment.apiUrl}/posts/all/id/${id}`)
  }

}
