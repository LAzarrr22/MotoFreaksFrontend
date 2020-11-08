import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppRoute} from "../../shared/enums/app-route.enum";
import {AllSentencePageComponent} from "./pages/all-sentence-page/all-sentence-page.component";


export const routes: Routes = [
  {
    path: AppRoute.ALL,
    component: AllSentencePageComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class SentencesRoutingModule {

}
