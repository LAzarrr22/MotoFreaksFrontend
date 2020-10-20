import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {getAllMessages, MessagesState} from "../reducers/messages.reducers";
import {GetAllMessages, ReadMessages, SendMessage} from "../action/messages.action";
import {Observable} from "rxjs";
import {MessageDataModel} from "../dto/response/message-data.model";

@Injectable()
export class MessagesService {

  constructor(private store: Store<MessagesState>) {
  }

  getAllMessages(): Observable<MessageDataModel[]> {
    this.store.dispatch(new GetAllMessages())
    return this.store.select(getAllMessages)
  }

  readMessages(id: string) {
    this.store.dispatch(new ReadMessages(id));
  }

  sendMessage(id: string, content: string) {
    this.store.dispatch(new SendMessage(id, content))
    setTimeout(() => {
      this.store.dispatch(new GetAllMessages())
    }, 1000)
  }
}
