import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AppRoute} from "../../shared/enums/app-route.enum";
import {AllChallengesPageComponent} from "./pages/all-challenges-page/all-challenges-page.component";
import {DoChallengePageComponent} from "./pages/do-challenge-page/do-challenge-page.component";

export const routes: Routes = [
  {
    path: AppRoute.ALL,
    component: AllChallengesPageComponent,
  },
  {
    path: AppRoute.FILL,
    component: DoChallengePageComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class ChallengesRoutingModule {
}
