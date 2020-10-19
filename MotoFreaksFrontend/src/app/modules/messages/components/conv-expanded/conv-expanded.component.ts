import {Component, Input, OnInit} from '@angular/core';
import {MessageModel} from "../../logic/dto/model/message.model";

@Component({
  selector: 'app-conv-expanded',
  templateUrl: './conv-expanded.component.html',
  styleUrls: ['./conv-expanded.component.scss']
})
export class ConvExpandedComponent implements OnInit {

  @Input()
  messages: MessageModel[];
  @Input()
  receiverName: string;
  @Input()
  receiverLastName: string;

  currentShowMessages: MessageModel[];

  constructor() {
  }

  ngOnInit(): void {
    if (this.messages.length > 6) {
      this.currentShowMessages = this.messages.slice(this.messages.length - 5, this.messages.length);
    } else {
      this.currentShowMessages = this.messages;
    }

  }

}
