import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessagesService} from "../../logic/services/messages.service";
import {Observable, Subscription, timer} from "rxjs";
import {MessageDataModel} from "../../logic/dto/response/message-data.model";
import {UsersService} from "../../../users/logic/services/users.service";
import {MenuService} from "../../../menu/logic/services/menu.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.scss']
})
export class MyMessagesComponent implements OnInit, OnDestroy {

  messages: Observable<MessageDataModel[]>;
  chatsSubs: Subscription;

  constructor(private messageService: MessagesService, private userService: UsersService, private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuService.activeRoute.next('')
    this.messages = this.messageService.getAllChats();
    this.loadChats();
    window.scrollTo(0, 0)
  }

  ngOnDestroy(): void {
    this.chatsSubs.unsubscribe();
  }

  loadChats() {
    return  this.chatsSubs = timer(0, 10000)
      .pipe(switchMap(() => this.messages= this.messageService.getAllChats())).subscribe();
  }

}
