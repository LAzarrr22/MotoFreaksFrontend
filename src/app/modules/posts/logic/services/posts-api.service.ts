import {HttpClient, HttpParams} from "@angular/common/http";
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
    return this.httpClient.put(`${environment.apiUrl}/posts`, {
      type: newPost.type,
      title: newPost.title,
      body: newPost.body,
      location: newPost.location,
      car: newPost.car
    })
  }

  resolvePost(id: string) {
    return this.httpClient.post(`${environment.apiUrl}/posts/resolve/${id}`,{});
  }

  deletePost(id: string) {
    return this.httpClient.delete(`${environment.apiUrl}/posts/${id}`);
  }

  getAllPosts(type: string, paramMap: Map<string, string>, paramStateMap: Map<string, string>): Observable<PostModel[]> {
    let params = new HttpParams();
    if(paramMap) {
      for (let paramMapElement of paramMap) {
        params = params.set(paramMapElement[0], paramMapElement[1])
      }}
      if(paramStateMap) {
        for (let paramMapElement of paramStateMap) {
          params = params.set(paramMapElement[0], paramMapElement[1])
        }
      }
      return this.httpClient.get<PostModel[]>(`${environment.apiUrl}/posts/${type}`,{params})
  }

  getAllPostsByCreatorId(id: string, type: string, paramMap: Map<string, string>, paramStateMap: Map<string, string>): Observable<PostModel[]> {
    let params = new HttpParams();
    if(paramMap) {
      for (let paramMapElement of paramMap) {
        params = params.set(paramMapElement[0], paramMapElement[1])
      }}
      if(paramStateMap) {
        for (let paramMapElement of paramStateMap) {
          params = params.set(paramMapElement[0], paramMapElement[1])
        }
      }
      return this.httpClient.get<PostModel[]>(`${environment.apiUrl}/posts/byUser/${id}/${type}`, {params})
  }

  addComment(postId: string, content:string) {
    return this.httpClient.put(`${environment.apiUrl}/posts/${postId}/comment`, {content})
  }

  deleteComment(postId: string, commentId:string) {
    return this.httpClient.delete(`${environment.apiUrl}/posts/${postId}/comment/${commentId}`)
  }

  approveComment(postId: string, commentId:string) {
    return this.httpClient.post(`${environment.apiUrl}/posts/${postId}/approve/comment/${commentId}`,{})
  }

  rejectComment(postId: string, commentId:string) {
    return this.httpClient.post(`${environment.apiUrl}/posts/${postId}/reject/comment/${commentId}`,{})
  }

}
