import {Component, OnInit} from '@angular/core';
import {MessagesService} from "../../logic/services/messages.service";
import {Observable} from "rxjs";
import {MessageDataModel} from "../../logic/dto/response/message-data.model";
import {UsersService} from "../../../users/logic/services/users.service";
import {MenuService} from "../../../menu/logic/services/menu.service";

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.scss']
})
export class MyMessagesComponent implements OnInit {

  messages: Observable<MessageDataModel[]>;

  constructor(private messageService: MessagesService, private userService: UsersService, private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuService.activeRoute.next('')
    this.messages = this.messageService.getAllMessages();
    window.scrollTo(0, 0)
  }

}
