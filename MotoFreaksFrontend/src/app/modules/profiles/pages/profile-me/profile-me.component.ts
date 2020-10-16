import {Component, OnInit} from '@angular/core';
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";
import {MenuService} from "../../../menu/logic/services/menu.service";
import {Observable} from "rxjs";
import {MyProfileModel} from "../../logic/dto/response/my-profile.model";
import {ProfileService} from "../../logic/services/profile.service";
import {FriendUserModel} from "../../logic/dto/response/friend-user.model";

@Component({
  selector: 'app-profile-me',
  templateUrl: './profile-me.component.html',
  styleUrls: ['./profile-me.component.scss']
})
export class ProfileMeComponent implements OnInit {

  profile: Observable<MyProfileModel>;
  friendsList: Observable<FriendUserModel[]>
  isLoading: Observable<boolean>;

  constructor(private menuService: MenuService, private profileService: ProfileService) {

  }

  ngOnInit(): void {
    this.profile = this.profileService.getMyProfile();
    this.friendsList = this.profileService.getMyFriends();
    this.menuService.activeRoute.next(ActiveRoute.MY_PROFILE)
  }

}
