import {MessageModel} from "../model/message.model";

export class MessageDataModel {
  id: string;
  messages: MessageModel[];


  constructor(id: string, messages: MessageModel[]) {
    this.id = id;
    this.messages = messages;
  }
}
