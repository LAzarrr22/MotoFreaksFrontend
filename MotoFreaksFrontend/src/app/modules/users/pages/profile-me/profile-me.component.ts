import {Component, OnInit} from '@angular/core';
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";
import {MenuService} from "../../../menu/logic/services/menu.service";
import {Store} from "@ngrx/store";
import {getLoading, getMyProfile, MyProfileState} from "../../logic/reducers/my-profile.reducers";
import {Observable} from "rxjs";
import {MyProfileModel} from "../../logic/dto/response/my-profile.model";

@Component({
  selector: 'app-profile-me',
  templateUrl: './profile-me.component.html',
  styleUrls: ['./profile-me.component.scss']
})
export class ProfileMeComponent implements OnInit {

  profile: Observable<MyProfileModel>;
  isLoading: Observable<boolean>;

  constructor(private menuService: MenuService, private store: Store<MyProfileState>) {
    this.profile = this.store.select(getMyProfile);
    this.isLoading = this.store.select(getLoading);

  }

  ngOnInit(): void {
    this.menuService.activeRoute.next(ActiveRoute.MY_PROFILE)
  }

}
