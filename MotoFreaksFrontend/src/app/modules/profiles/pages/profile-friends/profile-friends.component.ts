import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../users/logic/services/users.service";
import {UserModel} from "../../../users/logic/dto/response/user-model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile-friends',
  templateUrl: './profile-friends.component.html',
  styleUrls: ['./profile-friends.component.scss']
})
export class ProfileFriendsComponent implements OnInit {

  users: UserModel[];
  usersFiltered: UserModel[];
  user: UserModel;

  constructor(private route: ActivatedRoute, private usersService: UsersService) {
  }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    this.usersService.getAllUsers().subscribe(users => this.users = users);
    this.user = this.users.find((user: UserModel) => user.id === userId);
  }

}
