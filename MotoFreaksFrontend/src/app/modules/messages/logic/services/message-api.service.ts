import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {MessageDataModel} from "../dto/response/message-data.model";

@Injectable()
export class MessageApiService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getMyUnreadMessagesCount(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/message/unread/count`);
  }

  getAllMyMessages(): Observable<MessageDataModel[]> {
    return this.httpClient.get<MessageDataModel[]>(`${environment.apiUrl}/message/get`);
  }

}
