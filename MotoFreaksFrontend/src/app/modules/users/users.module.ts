import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserApiService} from "./logic/services/user-api.service";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./logic/effects/user.effects";
import {reducer} from "./logic/reducers/users.reducers";
import {UsersService} from "./logic/services/users.service";
import {AllUsersComponent} from './pages/all-users/all-users.component';
import {UsersRoutingModule} from "./users-routing.module";


@NgModule({
  declarations: [AllUsersComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('users', reducer),
    EffectsModule.forFeature([UserEffects]),
    UsersRoutingModule,
  ],
  providers: [
    UserApiService,
    UsersService,
  ]
})
export class UsersModule {
}
