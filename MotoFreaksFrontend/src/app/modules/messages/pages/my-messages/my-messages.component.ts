import {Component, OnInit} from '@angular/core';
import {MessagesService} from "../../logic/services/messages.service";
import {Observable} from "rxjs";
import {MessageDataModel} from "../../logic/dto/response/message-data.model";

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.scss']
})
export class MyMessagesComponent implements OnInit {

  messages: Observable<MessageDataModel[]>;

  constructor(private messageService: MessagesService) {
  }

  ngOnInit(): void {
    this.messages = this.messageService.getAllMessages();
  }

}
