import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../users/logic/services/users.service";

@Component({
  selector: 'app-profile-friends',
  templateUrl: './profile-friends.component.html',
  styleUrls: ['./profile-friends.component.scss']
})
export class ProfileFriendsComponent implements OnInit {

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe(users => console.dir(users))
  }

}
