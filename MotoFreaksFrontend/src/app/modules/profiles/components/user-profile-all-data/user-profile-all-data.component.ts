import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../../users/logic/dto/response/user-model";

@Component({
  selector: 'app-user-profile-all-data',
  templateUrl: './user-profile-all-data.component.html',
  styleUrls: ['./user-profile-all-data.component.scss']
})
export class UserProfileAllDataComponent implements OnInit {

  @Input()
  userProfile: UserModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
