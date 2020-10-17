import {Component, Input, OnInit} from '@angular/core';
import {MessageDataModel} from "../../logic/dto/response/message-data.model";

@Component({
  selector: 'app-conv-list',
  templateUrl: './conv-list.component.html',
  styleUrls: ['./conv-list.component.scss']
})
export class ConvListComponent implements OnInit {

  @Input()
  messages: MessageDataModel[];


  constructor() {
  }

  ngOnInit(): void {
  }

}
