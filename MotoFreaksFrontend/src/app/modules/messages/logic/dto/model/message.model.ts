export class MessageModel {
  messageContent: string;
  read: boolean;
  createdDate: Date;
  readDate: Date;
  received: boolean;


  constructor(messageContent: string, read: boolean, createdDate: Date, readDate: Date, received: boolean) {
    this.messageContent = messageContent;
    this.read = read;
    this.createdDate = createdDate;
    this.readDate = readDate;
    this.received = received;
  }
}
