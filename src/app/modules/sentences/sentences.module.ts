import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SentenceApiService} from "./logic/services/sentence-api.service";
import {SentencesRoutingModule} from "./sentences-routing.module";
import {SentenceService} from "./logic/services/sentence.service";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {reducer} from "./logic/reducers/sentence.reducers";
import {SentenceEffects} from "./logic/effects/sentence.effects";
import { AllSentencePageComponent } from './pages/all-sentence-page/all-sentence-page.component';
import { AllSentenceListComponent } from './components/all-sentence-list/all-sentence-list.component';
import {AngularMaterialModule} from "../../shared/angular-material.module";
import { AddEditSentenceComponent } from './components/add-edit-sentence/add-edit-sentence.component';
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [AllSentencePageComponent, AllSentenceListComponent, AddEditSentenceComponent],
  imports: [
    CommonModule,
    SentencesRoutingModule,
    StoreModule.forFeature('sentences-store', reducer),
    EffectsModule.forFeature([SentenceEffects]),
    AngularMaterialModule
  ],
  providers:[
    SentenceApiService,
    SentenceService
  ]
})
export class SentencesModule { }
