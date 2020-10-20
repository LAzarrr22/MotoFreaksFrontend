import {Component, Input, OnInit} from '@angular/core';
import {MessageModel} from "../../logic/dto/model/message.model";
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from "@angular/material/tooltip";
import {Router} from "@angular/router";
import {AppPath} from "../../../../shared/enums/app-path.enum";


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
  currentShowMessages: MessageModel[];
  loadedCount: number = 5;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (this.messages.length > 6) {
      this.currentShowMessages = this.messages.slice(this.messages.length - this.loadedCount, this.messages.length);
    } else {
      this.currentShowMessages = this.messages;
    }

  }

  goToConvList() {
    this.router.navigate([AppPath.MESSAGE_ALL])
  }

  loadMore() {
    this.loadedCount += 5;
    this.currentShowMessages = this.messages.slice(this.messages.length - this.loadedCount, this.messages.length);
  }
}
