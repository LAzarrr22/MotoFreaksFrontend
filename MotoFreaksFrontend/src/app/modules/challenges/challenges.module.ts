import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChallengesRoutingModule} from "./challenges-routing.module";
import {ChallengesApiService} from "./logic/services/challenges-api.service";
import {ChallengesService} from "./logic/services/challenges.service";
import {AllChallengesPageComponent} from './pages/all-challenges-page/all-challenges-page.component';
import {StoreModule} from "@ngrx/store";
import {reducer} from "./logic/reducers/challenges.reducers";
import {EffectsModule} from "@ngrx/effects";
import {ChallengesEffects} from "./logic/effects/challenges.effects";


@NgModule({
  declarations: [AllChallengesPageComponent],
  imports: [
    CommonModule,
    ChallengesRoutingModule,
    StoreModule.forFeature('challenge-store', reducer),
    EffectsModule.forFeature([ChallengesEffects])
  ],
  providers: [
    ChallengesApiService,
    ChallengesService

  ]
})
export class ChallengesModule {
}
