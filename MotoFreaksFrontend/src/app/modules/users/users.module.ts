import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileMeComponent} from './pages/profile-me/profile-me.component';
import {ProfileFriendsComponent} from './pages/profile-friends/profile-friends.component';
import {UsersRoutingModule} from "./users-routing.module";
import {MyProfileService} from "./logic/services/my-profile.service";
import {MyProfilePersonalDataComponent} from './components/my-profile-personal-data/my-profile-personal-data.component';
import {StoreModule} from "@ngrx/store";
import {reducer} from "./logic/reducers/my-profile.reducers";
import {EffectsModule} from "@ngrx/effects";
import {MyProfileEffects} from "./logic/effects/my-profile.effects";


@NgModule({
  declarations: [ProfileMeComponent, ProfileFriendsComponent, MyProfilePersonalDataComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature('my-profile', reducer),
    EffectsModule.forFeature([MyProfileEffects])
  ],
  exports: [
    ProfileMeComponent, ProfileFriendsComponent
  ],
  providers: [
    MyProfileService,
  ]

})
export class UsersModule {
}
