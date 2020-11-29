import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {getAllChats, getAllMessagesUser, getUnread, isLoading, MessagesState} from "../reducers/messages.reducers";
import {
  GetAllChatsMessages,
  GetAllMessagesByUser,
  GetUnreadMessages,
  ReadMessages,
  SendMessage
} from "../action/messages.action";
import {Observable} from "rxjs";
import {MessageDataModel} from "../dto/response/message-data.model";
import {MessageModel} from "../dto/model/message.model";

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

  getAllChats(): Observable<MessageDataModel[]> {
    this.store.dispatch(new GetAllChatsMessages())
    return this.store.select(getAllChats)
  }

  getAllMessagesByUser(id:string): Observable<MessageModel[]> {
    this.store.dispatch(new GetAllMessagesByUser(id))
    return this.store.select(getAllMessagesUser)
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
      this.store.dispatch(new GetAllChatsMessages())
      this.store.dispatch(new GetUnreadMessages());
    }, 800)
  }
}
