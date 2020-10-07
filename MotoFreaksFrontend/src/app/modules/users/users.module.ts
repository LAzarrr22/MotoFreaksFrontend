import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileMeComponent} from './pages/profile-me/profile-me.component';
import {ProfileFriendsComponent} from './pages/profile-friends/profile-friends.component';
import {UsersRoutingModule} from "./users-routing.module";
import {MyProfileApiService} from "./logic/services/my-profile-api.service";
import {MyProfilePersonalDataComponent} from './components/my-profile-personal-data/my-profile-personal-data.component';
import {StoreModule} from "@ngrx/store";
import {reducer} from "./logic/reducers/my-profile.reducers";
import {EffectsModule} from "@ngrx/effects";
import {MyProfileEffects} from "./logic/effects/my-profile.effects";
import {ProfileService} from "./logic/services/profile.service";
import {TopBarUserInfoComponent} from './components/top-bar-user-info/top-bar-user-info.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [ProfileMeComponent, ProfileFriendsComponent, MyProfilePersonalDataComponent, TopBarUserInfoComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature('my-profile', reducer),
    EffectsModule.forFeature([MyProfileEffects]),
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    ProfileMeComponent, ProfileFriendsComponent, TopBarUserInfoComponent
  ],
  providers: [
    MyProfileApiService,
    ProfileService,
  ]

})
export class UsersModule {
}
