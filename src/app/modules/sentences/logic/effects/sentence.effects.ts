import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Action, Store} from "@ngrx/store";
import {CommonComponentsService} from "../../../common/common.service";
import {SentenceApiService} from "../services/sentence-api.service";
import {Observable} from "rxjs";
import {
  ADD_SENTENCE,
  AddSentence,
  DELETE_SENTENCE,
  DeleteSentence,
  GET_ALL_SENTENCE,
  MERGE_SENTENCE,
  MergeSentence,
  SentenceFail,
  SentenceSuccess
} from "../action/sentence.actions";
import {catchError, switchMap} from "rxjs/operators";
import {SentenceModel} from "../model/sentence.model";

@Injectable()
export class SentenceEffects {
  constructor(private actions$: Actions, private store$: Store
    , private sentenceApiService: SentenceApiService
    , private errorService: CommonComponentsService) {
  }

  @Effect()
  getAll$: Observable<Action> = this.actions$
    .pipe(ofType(GET_ALL_SENTENCE),
      switchMap(() => {
        return this.sentenceApiService.getAll();
      }),
      switchMap((sentenceList: SentenceModel[]) => [
        new SentenceSuccess(sentenceList)
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new SentenceFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    );

 @Effect()
  addNew$: Observable<Action> = this.actions$
    .pipe(ofType(ADD_SENTENCE),
      switchMap((action: AddSentence) => {
        return this.sentenceApiService.addSentence(action.newSentence);
      }),
      switchMap((sentenceList: SentenceModel[]) => [
        new SentenceSuccess(sentenceList)
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new SentenceFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    );

 @Effect()
  mergeSentence$: Observable<Action> = this.actions$
    .pipe(ofType(MERGE_SENTENCE),
      switchMap((action: MergeSentence) => {
        return this.sentenceApiService.mergeSentence(action.idSentence,action.newSentence);
      }),
      switchMap((sentenceList: SentenceModel[]) => [
        new SentenceSuccess(sentenceList)
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new SentenceFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    );

@Effect()
  deleteSentence$: Observable<Action> = this.actions$
    .pipe(ofType(DELETE_SENTENCE),
      switchMap((action: DeleteSentence) => {
        return this.sentenceApiService.deleteSentence(action.idSentence);
      }),
      switchMap((sentenceList: SentenceModel[]) => [
        new SentenceSuccess(sentenceList)
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new SentenceFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    );


}
