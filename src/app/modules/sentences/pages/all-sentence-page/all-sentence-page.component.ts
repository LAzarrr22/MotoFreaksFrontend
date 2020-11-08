import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {SentenceModel} from "../../logic/model/sentence.model";
import {Store} from "@ngrx/store";
import {getAllSentences, SentenceState} from "../../logic/reducers/sentence.reducers";
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";
import {MenuService} from "../../../menu/logic/services/menu.service";
import {SentenceService} from "../../logic/services/sentence.service";

@Component({
  selector: 'app-all-sentence-page',
  templateUrl: './all-sentence-page.component.html',
  styleUrls: ['./all-sentence-page.component.scss']
})
export class AllSentencePageComponent implements OnInit {

  sentencesObsv: Observable<SentenceModel[]>

  constructor(private store: Store<SentenceState>, private menuService: MenuService,
              private sentenceService: SentenceService) {
  }

  ngOnInit(): void {
    this.sentenceService.getAll();
    this.sentencesObsv = this.store.select(getAllSentences);
    this.menuService.activeRoute.next(ActiveRoute.MY_PROFILE);
    window.scroll(0, 0)
  }

}
