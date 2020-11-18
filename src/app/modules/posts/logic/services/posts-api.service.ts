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
    return this.httpClient.post(`${environment.apiUrl}/posts/add`, {
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
    return this.httpClient.delete(`${environment.apiUrl}/posts/delete/${id}`);
  }

  getAllPosts(type: string, paramMap: Map<string, string>): Observable<PostModel[]> {
    let params = new HttpParams();
    if(paramMap) {
      for (let paramMapElement of paramMap) {
        params = params.set(paramMapElement[0], paramMapElement[1])
      }
      return this.httpClient.get<PostModel[]>(`${environment.apiUrl}/posts/get/${type}`,{params})

    }else{
      return this.httpClient.get<PostModel[]>(`${environment.apiUrl}/posts/get/${type}`)
    }
  }

  getAllPostsByCreatorId(id: string, type: string, paramMap: Map<string, string>): Observable<PostModel[]> {
    let params = new HttpParams();
    if(paramMap) {
      for (let paramMapElement of paramMap) {
        params = params.set(paramMapElement[0], paramMapElement[1])
      }
      return this.httpClient.get<PostModel[]>(`${environment.apiUrl}/posts/creator/id/${id}/get/${type}`, {params})
    }else{
      return this.httpClient.get<PostModel[]>(`${environment.apiUrl}/posts/creator/id/${id}/get/${type}`)
    }
  }

  addComment(postId: string, content:string) {
    return this.httpClient.post(`${environment.apiUrl}/posts/${postId}/add/comment`, {content})
  }

  deleteComment(postId: string, commentId:string) {
    return this.httpClient.delete(`${environment.apiUrl}/posts/${postId}/delete/comment/${commentId}`)
  }

  approveComment(postId: string, commentId:string) {
    return this.httpClient.post(`${environment.apiUrl}/posts/${postId}/approve/comment/${commentId}`,{})
  }

  rejectComment(postId: string, commentId:string) {
    return this.httpClient.post(`${environment.apiUrl}/posts/${postId}/reject/comment/${commentId}`,{})
  }

}
