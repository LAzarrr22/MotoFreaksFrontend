import {AppRoute} from "../../shared/enums/app-route.enum";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CreatePostPageComponent} from "./pages/create-post-page/create-post-page.component";
import {AllPostPageComponent} from "./pages/all-post-page/all-post-page.component";


export const routes: Routes = [
  {
    path: AppRoute.ALL,
    component: AllPostPageComponent,
  },
  {
    path: AppRoute.CREATE,
    component: CreatePostPageComponent,
  },


];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class PostsRoutingModule {
}
