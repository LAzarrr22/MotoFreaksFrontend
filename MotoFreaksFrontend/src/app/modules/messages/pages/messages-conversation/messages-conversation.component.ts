import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../../users/logic/services/users.service";
import {MenuService} from "../../../menu/logic/services/menu.service";
import {MessageModel} from "../../logic/dto/model/message.model";
import {MessagesService} from "../../logic/services/messages.service";
import {MessageDataModel} from "../../logic/dto/response/message-data.model";

@Component({
  selector: 'app-messages-conversation',
  templateUrl: './messages-conversation.component.html',
  styleUrls: ['./messages-conversation.component.scss']
})
export class MessagesConversationComponent implements OnInit {

  messagesData: MessageDataModel;
  messages: MessageModel[];
  userId: string

  constructor(private route: ActivatedRoute, private menuService: MenuService, private messageService: MessagesService, private userService: UsersService) {
  }

  ngOnInit(): void {
    this.menuService.activeRoute.next('')
    this.userId = this.route.snapshot.paramMap.get('id');
    this.loadMessages();
    if (this.messages != undefined) {
      this.messageService.readMessages(this.userId);
    }
    window.scrollTo(0, 0)
  }

  getReceiverName(): string {
    return this.userService.getName(this.userId);
  }

  getReceiverLastName(): string {
    return this.userService.getLastName(this.userId);
  }

  loadMessages() {
    this.messageService.getAllMessages().subscribe(messagesDataList => this.messagesData = messagesDataList.find(messageData => messageData.id == this.userId));
    if (this.messagesData != undefined) {
      this.messages = this.messagesData.messages;
    }
  }
}
