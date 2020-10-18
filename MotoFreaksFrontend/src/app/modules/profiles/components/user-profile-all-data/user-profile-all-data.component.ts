import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from "../../../users/logic/dto/response/user-model";
import {UsersService} from "../../../users/logic/services/users.service";

@Component({
  selector: 'app-user-profile-all-data',
  templateUrl: './user-profile-all-data.component.html',
  styleUrls: ['./user-profile-all-data.component.scss']
})
export class UserProfileAllDataComponent implements OnInit {

  @Input()
  userProfile: UserModel;
  @Output()
  reloadUser = new EventEmitter();

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
  }

  addFriend(id: string) {
    this.usersService.addFriend(id);
    this.reloadUser.emit();
  }
}
