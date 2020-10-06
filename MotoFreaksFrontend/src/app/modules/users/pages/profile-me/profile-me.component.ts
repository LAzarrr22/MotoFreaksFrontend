import {Component, OnInit} from '@angular/core';
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";
import {MenuService} from "../../../menu/logic/services/menu.service";
import {Store} from "@ngrx/store";
import {getMyProfile, MyProfileState} from "../../logic/reducers/my-profile.reducers";
import {GetMyProfile} from "../../logic/action/my-profile.action";
import {Observable} from "rxjs";
import {MyProfileModel} from "../../logic/dto/response/my-profile.model";

@Component({
  selector: 'app-profile-me',
  templateUrl: './profile-me.component.html',
  styleUrls: ['./profile-me.component.scss']
})
export class ProfileMeComponent implements OnInit {

  profile: Observable<MyProfileModel>;

  constructor(private menuService: MenuService, private store: Store<MyProfileState>) {
    this.store.dispatch(new GetMyProfile());
    this.profile = this.store.select(getMyProfile);

  }

  ngOnInit(): void {
    this.menuService.activeRoute.next(ActiveRoute.MY_PROFILE)
  }

}
