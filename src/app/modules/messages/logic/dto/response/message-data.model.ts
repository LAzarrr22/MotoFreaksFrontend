import {MessageModel} from "../model/message.model";

export class MessageDataModel {
  id: string;
  lastMessageDate: Date
  lastMessage: MessageModel;


  constructor(id: string, lastMessage: Date, messages: MessageModel) {
    this.id = id;
    this.lastMessageDate = new Date(lastMessage);
    this.lastMessage = messages;
  }
}
