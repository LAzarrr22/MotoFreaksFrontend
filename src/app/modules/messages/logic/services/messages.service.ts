import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {getAllMessages, getUnread, isLoading, MessagesState} from "../reducers/messages.reducers";
import {GetAllMessages, GetUnreadMessages, ReadMessages, SendMessage} from "../action/messages.action";
import {Observable} from "rxjs";
import {MessageDataModel} from "../dto/response/message-data.model";

@Injectable()
export class MessagesService {

  constructor(private store: Store<MessagesState>) {
  }

  isLoading():Observable<boolean>{
    return this.store.select(isLoading);
  }

  getUnreadCount(): Observable<number> {
    this.store.dispatch(new GetUnreadMessages());
    return this.store.select(getUnread);
  }

  getAllMessages(): Observable<MessageDataModel[]> {
    this.store.dispatch(new GetAllMessages())
    return this.store.select(getAllMessages)
  }

  readMessages(id: string) {
    this.store.dispatch(new ReadMessages(id));
    setTimeout(() => {
      this.store.dispatch(new GetUnreadMessages());
    }, 300)
  }

  sendMessage(id: string, content: string) {
    this.store.dispatch(new SendMessage(id, content))
    setTimeout(() => {
      this.store.dispatch(new GetAllMessages())
      this.store.dispatch(new GetUnreadMessages());
    }, 800)
  }
}
