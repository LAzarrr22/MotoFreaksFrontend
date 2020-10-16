import {Component, Input, OnInit} from '@angular/core';
import {FriendUserModel} from "../../../logic/dto/response/friend-user.model";

@Component({
  selector: 'app-section-friends',
  templateUrl: './section-friends.component.html',
  styleUrls: ['./section-friends.component.scss']
})
export class SectionFriendsComponent implements OnInit {
  @Input()
  friendsList: FriendUserModel[];
  @Input()
  myProfile: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
