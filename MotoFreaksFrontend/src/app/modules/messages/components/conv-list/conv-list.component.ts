import {Component, Input, OnInit} from '@angular/core';
import {MessageDataModel} from "../../logic/dto/response/message-data.model";
import {UserModel} from "../../../users/logic/dto/response/user-model";
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {Router} from "@angular/router";

@Component({
  selector: 'app-conv-list',
  templateUrl: './conv-list.component.html',
  styleUrls: ['./conv-list.component.scss']
})
export class ConvListComponent implements OnInit {

  @Input()
  messages: MessageDataModel[];
  @Input()
  allUsers: UserModel[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  getReceiverName(id: string): string {
    return this.allUsers.find(user => user.id === id).name;
  }

  getReceiverLastName(id: string): string {
    return this.allUsers.find(user => user.id === id).lastName;
  }

  goToExpandConv(id: string) {
    this.router.navigate([AppPath.MESSAGE_CONVERSATION, {id: id}])
  }
}
