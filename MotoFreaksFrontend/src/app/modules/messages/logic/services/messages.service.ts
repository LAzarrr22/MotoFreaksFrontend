import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {getAllMessages, MessagesState} from "../reducers/messages.reducers";
import {GetAllMessages} from "../action/messages.action";

@Injectable()
export class MessagesService {

  constructor(private store: Store<MessagesState>) {
  }

  getAllMessages() {
    this.store.dispatch(new GetAllMessages())
    return this.store.select(getAllMessages)
  }

}
