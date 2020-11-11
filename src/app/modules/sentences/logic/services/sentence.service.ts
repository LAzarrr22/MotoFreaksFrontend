import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {getAllSentences, SentenceState} from "../reducers/sentence.reducers";
import {DeleteSentence, GetAllSentences, MergeSentence} from "../action/sentence.actions";
import {NewSentenceModel} from "../model/new-sentence.model";


@Injectable()
export class SentenceService {

  constructor(private store: Store<SentenceState>) {
  }

  getAll() {
    this.store.dispatch(new GetAllSentences())
    return this.store.select(getAllSentences);
  }

  mergeSentence(newSentence: NewSentenceModel) {
    this.store.dispatch(new MergeSentence(newSentence))
  }

  deleteSentence(id: string) {
    this.store.dispatch(new DeleteSentence(id))
  }

}
