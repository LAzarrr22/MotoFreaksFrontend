import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChallengesRoutingModule} from "./challenges-routing.module";
import {ChallengesApiService} from "./logic/services/challenges-api.service";
import {ChallengesService} from "./logic/services/challenges.service";
import {AllChallengesPageComponent} from './pages/all-challenges-page/all-challenges-page.component';


@NgModule({
  declarations: [AllChallengesPageComponent],
  imports: [
    CommonModule,
    ChallengesRoutingModule,
  ],
  providers: [
    ChallengesApiService,
    ChallengesService,
  ]
})
export class ChallengesModule {
}
