import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MessageModel} from "../../logic/dto/model/message.model";
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from "@angular/material/tooltip";
import {Router} from "@angular/router";
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {MessagesService} from "../../logic/services/messages.service";
import {RouterUpgradeInitializer} from "@angular/router/upgrade";


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
  currentShowMessages: MessageModel[];
  @Input()
  receiverCalled: string;
  @Input()
  receiverName: string;
  @Input()
  isShowMore: boolean;
  @Input()
  showSpinner: boolean;

  @Output()
  loadMoreEvent = new EventEmitter();
  @Output()
  sendMessageEvent = new EventEmitter<string>();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToConvList() {
    this.router.navigate([AppPath.MESSAGE_ALL])
  }

  loadMore() {
    this.loadMoreEvent.emit();
  }

  sendMessage(content: string) {
    this.sendMessageEvent.emit(content);
  }
}
