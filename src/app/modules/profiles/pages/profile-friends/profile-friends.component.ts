import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../../users/logic/services/users.service";
import {UserModel} from "../../../users/logic/dto/response/user-model";
import {ActivatedRoute} from "@angular/router";
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";
import {MenuService} from "../../../menu/logic/services/menu.service";
import {AuthService} from "../../../authentication/logic/services/auth.service";

@Component({
  selector: 'app-profile-friends',
  templateUrl: './profile-friends.component.html',
  styleUrls: ['./profile-friends.component.scss']
})
export class ProfileFriendsComponent implements OnInit {

  users: UserModel[];
  user: UserModel;
  isAdmin:boolean=false;

  constructor(private route: ActivatedRoute, private usersService: UsersService,
              private menuService: MenuService,  private authService:AuthService) {
  }

  ngOnInit(): void {
    this.menuService.activeRoute.next(ActiveRoute.ALL_USERS)
    const userId = this.route.snapshot.paramMap.get('id');
    this.getUser(userId);
    this.isAdmin=this.authService.isAdmin();
    window.scrollTo(0, 0)

  }

  getUser(userId: string) {
    this.usersService.getAllUsers().subscribe(users => this.users = users);
    this.user = this.users.find((user: UserModel) => user.id === userId);
  }

  reloadUser(userId: string) {
    setTimeout(() => {
      this.getUser(userId)
    }, 1000)
  }
}
