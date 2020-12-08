import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {MessageDataModel} from "../dto/response/message-data.model";
import {MessageModel} from "../dto/model/message.model";

@Injectable()
export class MessageApiService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getMyUnreadMessagesCount(): Observable<number> {
    return this.httpClient.get<number>(`${environment.apiUrl}/message/unread`);
  }

  getAllMyChats(): Observable<MessageDataModel[]> {
    return this.httpClient.get<MessageDataModel[]>(`${environment.apiUrl}/message/chats`);
  }

  getMessages(id:string): Observable<MessageModel[]> {
    return this.httpClient.get<MessageModel[]>(`${environment.apiUrl}/message/${id}`);
  }

  sendMessage(id: string, content: string): Observable<any> {
    return this.httpClient.put(`${environment.apiUrl}/message/send/${id}`, {content});
  }

  readMessages(id: string): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/message/read/${id}`, {});
  }
}
