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
import {AllUserListComponent} from './components/all-user-list/all-user-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [AllUsersComponent, AllUserListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('users', reducer),
    EffectsModule.forFeature([UserEffects]),
    UsersRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatDividerModule,
  ],
  providers: [
    UserApiService,
    UsersService,
  ]
})
export class UsersModule {
}
