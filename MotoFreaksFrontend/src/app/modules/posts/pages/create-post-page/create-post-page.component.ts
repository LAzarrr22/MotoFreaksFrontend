import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../../../profiles/logic/services/profile.service";
import {PostType} from "../../logic/enums/post-type.enum";
import {Observable} from "rxjs";
import {MyProfileModel} from "../../../profiles/logic/dto/response/my-profile.model";
import {MenuService} from "../../../menu/logic/services/menu.service";
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";

@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  styleUrls: ['./create-post-page.component.scss']
})
export class CreatePostPageComponent implements OnInit {

  postTypes = PostType;
  postTypeList = [];
  myProfile: Observable<MyProfileModel>;

  constructor(private  profileService: ProfileService, private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuService.activeRoute.next(ActiveRoute.POSTS)
    this.postTypeList = Object.keys(this.postTypes);
    this.myProfile = this.profileService.getMyProfile();
  }

}
