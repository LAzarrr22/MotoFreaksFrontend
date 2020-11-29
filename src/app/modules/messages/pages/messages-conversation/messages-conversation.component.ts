import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../../users/logic/services/users.service";
import {MenuService} from "../../../menu/logic/services/menu.service";
import {MessageModel} from "../../logic/dto/model/message.model";
import {MessagesService} from "../../logic/services/messages.service";
import {Subscription, timer} from "rxjs";
import {first, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-messages-conversation',
  templateUrl: './messages-conversation.component.html',
  styleUrls: ['./messages-conversation.component.scss']
})
export class MessagesConversationComponent implements OnInit, OnDestroy {

  messagesList: MessageModel[];
  receiverUserId: string;
  messageSubs: Subscription;
  currentShowMessages: MessageModel[];
  isShowMore: boolean;
  loadedCount: number;
  showSpinnerNewMessage: boolean;

  constructor(private route: ActivatedRoute, private menuService: MenuService, private messageService: MessagesService, private userService: UsersService) {
  }

  ngOnInit(): void {
    this.loadedCount = 7;
    this.menuService.activeRoute.next('')
    this.receiverUserId = this.route.snapshot.paramMap.get('id');
    this.messageService.readMessages(this.receiverUserId);
    this.loadMessages();
    window.scrollTo(0, 0)
  }

  ngOnDestroy(): void {
    this.messageSubs.unsubscribe();
  }

  getReceiver() {
    return this.userService.getName(this.receiverUserId) + ' ' + this.userService.getLastName(this.receiverUserId);
  }

  loadMessages() {
    return this.messageSubs = timer(0, 5000)
      .pipe(switchMap(() => this.messageService.getAllMessagesByUser(this.receiverUserId)))
      .subscribe(messagesList => {
          this.setMessageFromSubs(messagesList)
        }
      );
  }

  setMessageFromSubs(messages: MessageModel[]) {
    this.messagesList = messages;
    if (this.messagesList != undefined) {
      this.sliceMessages();
    }
  }

  sliceMessages() {
    this.showSpinnerNewMessage = true;
    if (this.loadedCount > 0 && this.loadedCount > this.messagesList.length) {
      this.loadedCount = this.messagesList.length
    }
    if (this.messagesList.length > 8) {
      this.isShowMore = true;
      this.currentShowMessages = this.messagesList.slice(this.messagesList.length - this.loadedCount, this.messagesList.length);
    } else {
      this.currentShowMessages = this.messagesList;
    }
    if (this.messagesList.length == this.currentShowMessages.length) {
      this.isShowMore = false;
    }
    this.showSpinnerNewMessage = false;

  }

  loadMore() {
    if (this.messagesList.length >= 8) {
      this.loadedCount += 5;
    }
    this.sliceMessages()
  }

  sendMessage(content: string) {
    this.showSpinnerNewMessage = true;
    this.messageService.sendMessage(this.receiverUserId, content);
    this.loadedCount += 1;
  }


}
