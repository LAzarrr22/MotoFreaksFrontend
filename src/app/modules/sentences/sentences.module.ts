import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SentenceApiService} from "./logic/services/sentence-api.service";
import {SentencesRoutingModule} from "./sentences-routing.module";
import {SentenceService} from "./logic/services/sentence.service";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {reducer} from "./logic/reducers/sentence.reducers";
import {SentenceEffects} from "./logic/effects/sentence.effects";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SentencesRoutingModule,
    StoreModule.forFeature('sentences', reducer),
    EffectsModule.forFeature([SentenceEffects]),
  ],
  providers:[
    SentenceApiService,
    SentenceService
  ]
})
export class SentencesModule { }
