import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileMeComponent} from './pages/profile-me/profile-me.component';
import {ProfileFriendsComponent} from './pages/profile-friends/profile-friends.component';
import {UsersRoutingModule} from "./users-routing.module";


@NgModule({
  declarations: [ProfileMeComponent, ProfileFriendsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [
    ProfileMeComponent, ProfileFriendsComponent
  ]
})
export class UsersModule {
}
