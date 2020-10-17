import {AppRoute} from "../../shared/enums/app-route.enum";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MyMessagesComponent} from "./pages/my-messages/my-messages.component";


export const routes: Routes = [
  {
    path: AppRoute.ALL,
    component: MyMessagesComponent,
  },
  {
    path: AppRoute.ALL,
    component: MyMessagesComponent,
  },


];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class MessagesRoutingModule {
}
