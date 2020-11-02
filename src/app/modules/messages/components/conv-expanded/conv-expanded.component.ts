import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MessageModel} from "../../logic/dto/model/message.model";
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from "@angular/material/tooltip";
import {Router} from "@angular/router";
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {MessagesService} from "../../logic/services/messages.service";


export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 500,
  hideDelay: 1500,
  touchendHideDelay: 1000,
};

@Component({
  selector: 'app-conv-expanded',
  templateUrl: './conv-expanded.component.html',
  styleUrls: ['./conv-expanded.component.scss'],
  providers: [
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}
  ]
})
export class ConvExpandedComponent implements OnInit {

  @Input()
  messages: MessageModel[];
  @Input()
  receiverName: string;
  @Input()
  receiverLastName: string;
  @Input()
  receiverID: string

  @Output()
  loadFirstMessage = new EventEmitter();

  currentShowMessages: MessageModel[];
  loadedCount: number = 5;
  isShowMore: boolean;

  constructor(private router: Router, private messagesService: MessagesService) {
  }

  ngOnInit(): void {
    if (this.messages != undefined) {
      this.sliceMessages();
    }
  }

  goToConvList() {
    this.router.navigate([AppPath.MESSAGE_ALL])
  }

  sliceMessages() {
    if (this.messages.length > 6) {
      this.isShowMore = true;
      this.currentShowMessages = this.messages.slice(this.messages.length - this.loadedCount, this.messages.length);
    } else {
      this.currentShowMessages = this.messages;
    }

  }

  loadMore() {
    if (this.messages.length > 6) {
      this.loadedCount += 5;
    }
    this.sliceMessages()
  }

  sendMessage(content: string) {
    this.messagesService.sendMessage(this.receiverID, content);

    setTimeout(() => {
      this.loadFirstMessage.emit();
    }, 1000)
    setTimeout(() => {
      if (this.messages.length > 6) {
        this.loadedCount += 1;
      }
      this.sliceMessages()
    }, 1500)

  }
}
