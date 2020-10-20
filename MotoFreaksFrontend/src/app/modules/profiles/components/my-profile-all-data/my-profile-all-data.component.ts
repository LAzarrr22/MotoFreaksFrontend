import {Component, Input, OnInit} from '@angular/core';
import {MyProfileModel} from "../../logic/dto/response/my-profile.model";
import {FriendUserModel} from "../../logic/dto/response/friend-user.model";
import {RolesEnum} from "../../../authentication/logic/enums/roles.enum";

@Component({
  selector: 'app-my-profile-all-data',
  templateUrl: './my-profile-all-data.component.html',
  styleUrls: ['./my-profile-all-data.component.scss']
})
export class MyProfileAllDataComponent implements OnInit {
  @Input()
  profile: MyProfileModel;
  @Input()
  isLoading: boolean;
  @Input()
  friends: FriendUserModel[];
  @Input()
  myRoles: RolesEnum[];

  constructor() {

  }

  ngOnInit(): void {
  }

}
