import {MessageModel} from "../model/message.model";

export class MessageDataModel {
  id: string;
  lastMessage: Date
  messages: MessageModel[];


  constructor(id: string, lastMessage: Date, messages: MessageModel[]) {
    this.id = id;
    this.lastMessage = new Date(lastMessage);
    this.messages = messages;
  }
}
