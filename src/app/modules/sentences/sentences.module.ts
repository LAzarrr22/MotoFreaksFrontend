import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SentenceApiService} from "./logic/services/sentence-api.service";
import {SentencesRoutingModule} from "./sentences-routing.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SentencesRoutingModule,
  ],
  providers:[
    SentenceApiService,
  ]
})
export class SentencesModule { }
