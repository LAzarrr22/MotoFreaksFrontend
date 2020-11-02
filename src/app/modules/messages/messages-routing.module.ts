import {AppRoute} from "../../shared/enums/app-route.enum";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MyMessagesComponent} from "./pages/my-messages/my-messages.component";
import {MessagesConversationComponent} from "./pages/messages-conversation/messages-conversation.component";


export const routes: Routes = [
  {
    path: AppRoute.ALL,
    component: MyMessagesComponent,
  },
  {
    path: AppRoute.CONVERSATION,
    component: MessagesConversationComponent,
  },


];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class MessagesRoutingModule {
}
