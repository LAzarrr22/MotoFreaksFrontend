import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AppRoute} from "../../shared/enums/app-route.enum";
import {AllChallengesPageComponent} from "./pages/all-challenges-page/all-challenges-page.component";
import {DoChallengePageComponent} from "./pages/do-challenge-page/do-challenge-page.component";
import {ModeratorGuard} from "../../shared/guards/moderator-guard.service";
import {CreateChallengePageComponent} from "./pages/create-challenge-page/create-challenge-page.component";
import {MergeChallengePageComponent} from "./pages/merge-challenge-page/merge-challenge-page.component";

export const routes: Routes = [
  {
    path: AppRoute.ALL,
    component: AllChallengesPageComponent,
  },
  {
    path: AppRoute.FILL,
    component: DoChallengePageComponent,
  },
  {
    path: AppRoute.CREATE,
    canActivate: [ModeratorGuard],
    component: CreateChallengePageComponent,
  },
  {
    path: AppRoute.MERGE,
    canActivate: [ModeratorGuard],
    component: MergeChallengePageComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class ChallengesRoutingModule {
}
