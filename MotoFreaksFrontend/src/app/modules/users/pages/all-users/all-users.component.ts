import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../logic/dto/response/user-model";
import {UsersService} from "../../logic/services/users.service";
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";
import {MenuService} from "../../../menu/logic/services/menu.service";
import {Observable} from "rxjs";
import {ProfileService} from "../../../profiles/logic/services/profile.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  users: Observable<UserModel[]>;
  meId: string;

  constructor(private menuService: MenuService, private usersService: UsersService, private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.menuService.activeRoute.next(ActiveRoute.ALL_USERS);
    this.users = this.usersService.getAllUsers();
    this.profileService.getMyProfile().pipe(first()).subscribe(me => this.meId = me.id)
  }

}
