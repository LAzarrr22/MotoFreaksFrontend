import {Component, Input, OnInit} from '@angular/core';
import {MessageDataModel} from "../../logic/dto/response/message-data.model";
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {Router} from "@angular/router";
import {UsersService} from "../../../users/logic/services/users.service";

@Component({
  selector: 'app-conv-list',
  templateUrl: './conv-list.component.html',
  styleUrls: ['./conv-list.component.scss']
})
export class ConvListComponent implements OnInit {

  @Input()
  messages: MessageDataModel[];


  constructor(private router: Router, private userService: UsersService) {
  }

  ngOnInit(): void {
  }

  getReceiverName(id: string): string {
    return this.userService.getName(id);
  }

  getReceiverLastName(id: string): string {
    return this.userService.getLastName(id);
  }

  goToExpandConv(id: string) {
    this.router.navigate([AppPath.MESSAGE_CONVERSATION, {id: id}])
  }
}
