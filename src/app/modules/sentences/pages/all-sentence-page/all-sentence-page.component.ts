import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {SentenceModel} from "../../logic/model/sentence.model";
import {Store} from "@ngrx/store";
import {getAllSentences, SentenceState} from "../../logic/reducers/sentence.reducers";
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";
import {MenuService} from "../../../menu/logic/services/menu.service";
import {SentenceService} from "../../logic/services/sentence.service";
import {AuthService} from "../../../authentication/logic/services/auth.service";
import {NewSentenceModel} from "../../logic/model/new-sentence.model";
import {AddEditSentenceComponent} from "../../components/add-edit-sentence/add-edit-sentence.component";

@Component({
  selector: 'app-all-sentence-page',
  templateUrl: './all-sentence-page.component.html',
  styleUrls: ['./all-sentence-page.component.scss']
})
export class AllSentencePageComponent implements OnInit {

  sentencesObsv: Observable<SentenceModel[]>
  isModerator:boolean;

  constructor(private store: Store<SentenceState>, private menuService: MenuService,
              private sentenceService: SentenceService, private authService:AuthService) {
  }

  ngOnInit(): void {
    this.sentenceService.getAll();
    this.isModerator=this.authService.isModerator()
    this.sentencesObsv = this.store.select(getAllSentences);
    this.menuService.activeRoute.next(ActiveRoute.SENTENCES);
    window.scroll(0, 0)
  }

  mergeSentence(mergeObject:NewSentenceModel){
    this.sentenceService.mergeSentence(mergeObject);
    setTimeout(()=>{
      this.sentencesObsv = this.store.select(getAllSentences);
    },500)

  }

  deleteSentence(id: string) {
    this.sentenceService.deleteSentence(id);
    this.sentencesObsv = this.store.select(getAllSentences);
  }
}
