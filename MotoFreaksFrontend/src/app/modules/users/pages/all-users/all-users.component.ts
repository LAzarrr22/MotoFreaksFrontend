import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../logic/dto/response/user-model";
import {UsersService} from "../../logic/services/users.service";
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";
import {MenuService} from "../../../menu/logic/services/menu.service";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  users: UserModel[];

  constructor(private menuService: MenuService, private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.menuService.activeRoute.next(ActiveRoute.ALL_USERS)
    this.usersService.getAllUsers().subscribe(users => this.users = users)
  }

}
