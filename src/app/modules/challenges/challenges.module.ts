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
import {ChallengesListComponent} from './components/challenges-list/challenges-list.component';
import {ChallengesListItemComponent} from './components/challenges-list-item/challenges-list-item.component';
import {DoChallengePageComponent} from './pages/do-challenge-page/do-challenge-page.component';
import {CreateChallengePageComponent} from './pages/create-challenge-page/create-challenge-page.component';
import {AngularMaterialModule} from "../../shared/angular-material.module";
import {AppCommonModule} from "../common/common.module";
import {QuestionsComponent} from './components/questions/questions.component';
import {QuestionItemComponent} from './components/question-item/question-item.component';
import {QuestionAnswerItemComponent} from './components/question-answer-item/question-answer-item.component';
import {SummaryFinishChallengeComponent} from './components/summary-finish-challenge/summary-finish-challenge.component';
import { CreateGeneralComponent } from './components/create-general/create-general.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { CreatedQuestionItemComponent } from './components/created-question-item/created-question-item.component';


@NgModule({
  declarations: [AllChallengesPageComponent, ChallengesListComponent, ChallengesListItemComponent,
    DoChallengePageComponent, CreateChallengePageComponent, QuestionsComponent, QuestionItemComponent,
    QuestionAnswerItemComponent, SummaryFinishChallengeComponent, CreateGeneralComponent, CreateQuestionComponent, CreatedQuestionItemComponent],
  imports: [
    CommonModule,
    ChallengesRoutingModule,
    StoreModule.forFeature('challenge-store', reducer),
    EffectsModule.forFeature([ChallengesEffects]),
    AngularMaterialModule,
    AppCommonModule
  ],
  providers: [
    ChallengesApiService,
    ChallengesService

  ]
})
export class ChallengesModule {
}
