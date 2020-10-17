export class MessageModel {
  messageContent: string;
  isRead: boolean;
  createdDate: Date;
  readDate: Date;
  isReceived: boolean;


  constructor(messageContent: string, isRead: boolean, createdDate: Date, readDate: Date, isReceived: boolean) {
    this.messageContent = messageContent;
    this.isRead = isRead;
    this.createdDate = createdDate;
    this.readDate = readDate;
    this.isReceived = isReceived;
  }
}
