import {Component, Input, OnInit} from '@angular/core';
import {SentenceModel} from "../../logic/model/sentence.model";

@Component({
  selector: 'app-all-sentence-list',
  templateUrl: './all-sentence-list.component.html',
  styleUrls: ['./all-sentence-list.component.scss']
})
export class AllSentenceListComponent implements OnInit {

  @Input()
  sentencesList:SentenceModel[]


  constructor() { }

  ngOnInit(): void {
  }

}
