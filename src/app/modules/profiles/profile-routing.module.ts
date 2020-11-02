import {RouterModule, Routes} from "@angular/router";
import {AppRoute} from "../../shared/enums/app-route.enum";
import {NgModule} from "@angular/core";
import {ProfileMeComponent} from "./pages/profile-me/profile-me.component";
import {ProfileFriendsComponent} from "./pages/profile-friends/profile-friends.component";

export const routes: Routes = [
  {
    path: AppRoute.ME,
    component: ProfileMeComponent
  },
  {
    path: AppRoute.USER,
    component: ProfileFriendsComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class ProfileRoutingModule {

}
