import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileMeComponent} from './pages/profile-me/profile-me.component';
import {ProfileFriendsComponent} from './pages/profile-friends/profile-friends.component';
import {UsersRoutingModule} from "./users-routing.module";
import {MyProfileApiService} from "./logic/services/my-profile-api.service";
import {StoreModule} from "@ngrx/store";
import {reducer} from "./logic/reducers/my-profile.reducers";
import {EffectsModule} from "@ngrx/effects";
import {MyProfileEffects} from "./logic/effects/my-profile.effects";
import {ProfileService} from "./logic/services/profile.service";
import {TopBarUserInfoComponent} from './components/top-bar-user-info/top-bar-user-info.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {SectionPersonalComponent} from './components/my-profile-all-data/section-personal/section-personal.component';
import {SectionCarsComponent} from './components/my-profile-all-data/section-cars/section-cars.component';
import {SectionAddressComponent} from './components/my-profile-all-data/section-address/section-address.component';
import {SectionContactComponent} from './components/my-profile-all-data/section-contact/section-contact.component';
import {SectionFriendsComponent} from './components/my-profile-all-data/section-friends/section-friends.component';
import {MyProfileAllDataComponent} from './components/my-profile-all-data/my-profile-all-data.component';
import {MatBadgeModule} from "@angular/material/badge";
import {MatDividerModule} from "@angular/material/divider";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {PipesModule} from "../../shared/pipes/pipes.module";
import {AppCommonModule} from "../common/common.module";


@NgModule({
  declarations: [ProfileMeComponent, ProfileFriendsComponent, TopBarUserInfoComponent, SectionPersonalComponent, SectionCarsComponent, SectionAddressComponent, SectionContactComponent, SectionFriendsComponent, MyProfileAllDataComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature('my-profile', reducer),
    EffectsModule.forFeature([MyProfileEffects]),
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatDividerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    PipesModule,
    AppCommonModule
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
