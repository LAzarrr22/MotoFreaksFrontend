import {Injectable, NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {routes} from "../profiles/profile-routing.module";



@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class SentencesRoutingModule {

}
