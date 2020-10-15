import {AppRoute} from "../../shared/enums/app-route.enum";
import {RouterModule, Routes} from "@angular/router";
import {AllUsersComponent} from "./pages/all-users/all-users.component";
import {NgModule} from "@angular/core";


export const routes: Routes = [
  {
    path: AppRoute.ALL,
    component: AllUsersComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class UsersRoutingModule {

}
