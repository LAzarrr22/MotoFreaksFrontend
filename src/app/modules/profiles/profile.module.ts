import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileMeComponent} from './pages/profile-me/profile-me.component';
import {ProfileFriendsComponent} from './pages/profile-friends/profile-friends.component';
import {ProfileRoutingModule} from "./profile-routing.module";
import {MyProfileApiService} from "./logic/services/my-profile-api.service";
import {StoreModule} from "@ngrx/store";
import {reducer} from "./logic/reducers/my-profile.reducers";
import {EffectsModule} from "@ngrx/effects";
import {MyProfileEffects} from "./logic/effects/my-profile.effects";
import {ProfileService} from "./logic/services/profile.service";
import {TopBarUserInfoComponent} from './components/top-bar-user-info/top-bar-user-info.component';
import {MyProfileAllDataComponent} from './components/my-profile-all-data/my-profile-all-data.component';
import {PipesModule} from "../../shared/pipes/pipes.module";
import {AppCommonModule} from "../common/common.module";
import {CarsModule} from "../cars/cars.module";
import {SectionMyPersonalComponent} from "./components/profile-sections/section-my-personal/section-my-personal.component";
import {SectionAddressComponent} from "./components/profile-sections/section-address/section-address.component";
import {SectionContactComponent} from "./components/profile-sections/section-contact/section-contact.component";
import {SectionFriendsComponent} from "./components/profile-sections/section-friends/section-friends.component";
import {UsersModule} from "../users/users.module";
import {UserProfileAllDataComponent} from './components/user-profile-all-data/user-profile-all-data.component';
import {SectionUserPersonalComponent} from './components/profile-sections/section-user-personal/section-user-personal.component';
import {MessagesModule} from "../messages/messages.module";
import {SectionRolesComponent} from './components/profile-sections/section-roles/section-roles.component';
import {AngularMaterialModule} from "../../shared/angular-material.module";
import {SharedSectionCarModule} from "./components/profile-sections/section-cars/shared-section-car.module";
import {PostsModule} from "../posts/posts.module";


@NgModule({
  declarations: [ProfileMeComponent, ProfileFriendsComponent, TopBarUserInfoComponent, SectionMyPersonalComponent, SectionAddressComponent, SectionContactComponent, SectionFriendsComponent, MyProfileAllDataComponent, UserProfileAllDataComponent, SectionUserPersonalComponent, SectionRolesComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    StoreModule.forFeature('my-profile', reducer),
    EffectsModule.forFeature([MyProfileEffects]),
    AngularMaterialModule,
    PipesModule,
    AppCommonModule,
    CarsModule,
    UsersModule,
    MessagesModule,
    SharedSectionCarModule,
    PostsModule
  ],
  exports: [
    ProfileMeComponent, ProfileFriendsComponent, TopBarUserInfoComponent
  ],
  providers: [
    MyProfileApiService,
    ProfileService
  ]

})
export class ProfileModule {
}
