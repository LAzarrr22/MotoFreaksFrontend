import {Component, OnInit} from '@angular/core';
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../../users/logic/services/users.service";
import {MenuService} from "../../../menu/logic/services/menu.service";
import {MessageModel} from "../../logic/dto/model/message.model";
import {MessagesService} from "../../logic/services/messages.service";
import {UserModel} from "../../../users/logic/dto/response/user-model";

@Component({
  selector: 'app-messages-conversation',
  templateUrl: './messages-conversation.component.html',
  styleUrls: ['./messages-conversation.component.scss']
})
export class MessagesConversationComponent implements OnInit {

  messages: MessageModel[];
  userId: string
  allUsers: UserModel[];

  constructor(private route: ActivatedRoute, private menuService: MenuService, private messageService: MessagesService, private userService: UsersService) {
  }

  ngOnInit(): void {
    this.menuService.activeRoute.next(ActiveRoute.MY_PROFILE)
    this.userId = this.route.snapshot.paramMap.get('id');
    this.messageService.getAllMessages().subscribe(messagesDataList => this.messages = messagesDataList.find(messageData => messageData.id == this.userId).messages);
    this.userService.getAllUsers().subscribe(users => this.allUsers = users);
    this.messageService.readMessages(this.userId);
  }

  getReceiverName(): string {
    return this.allUsers.find(user => user.id === this.userId).name;
  }

  getReceiverLastName(): string {
    return this.allUsers.find(user => user.id === this.userId).lastName;
  }
}
