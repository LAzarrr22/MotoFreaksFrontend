import {Component, Input, OnInit} from '@angular/core';
import {MessageModel} from "../../logic/dto/model/message.model";

@Component({
  selector: 'app-conv-item-list',
  templateUrl: './conv-item-list.component.html',
  styleUrls: ['./conv-item-list.component.scss']
})
export class ConvItemListComponent implements OnInit {

  @Input()
  receiverName: string;
  @Input()
  receiverLastName: string;
  @Input()
  messages: MessageModel[];

  constructor() {
  }

  ngOnInit(): void {
  }


}
