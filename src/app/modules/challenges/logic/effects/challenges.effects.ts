import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Action, Store} from "@ngrx/store";
import {CommonComponentsService} from "../../../common/common.service";
import {ChallengesApiService} from "../services/challenges-api.service";
import {Observable} from "rxjs";
import {
  ADD_COMPETITOR,
  AddCompetitor,
  AddCompetitorFail,
  AddCompetitorSuccess, ChallengeLoadFail,
  CREATE_CHALLENGE,
  CreateChallenge,
  CreateChallengeFail,
  CreateChallengeSuccess,
  DELETE_CHALLENGE,
  DeleteChallenge,
  DeleteChallengeFail,
  DeleteChallengeSuccess,
  GET_ALL_CHALLENGES,
  GET_ALL_CHALLENGES_BY_USER,
  GET_ALL_CHALLENGES_GENERAL,
  GET_QUESTIONS_BY_ID,
  GetAllChallenges,
  GetAllChallengesByUser,
  GetAllChallengesByUserSuccess,
  GetAllChallengesGeneral,
  GetAllChallengesGeneralSuccess,
  GetAllChallengesSuccess,
  GetQuestionsById,
  GetQuestionsByIdFail,
  GetQuestionsByIdSuccess,
  MERGE_CHALLENGE,
  MergeChallenge,
  MergeChallengeFail,
  MergeChallengeSuccess
} from "../actions/challenges.actions";
import {catchError, switchMap} from "rxjs/operators";
import {ChallengeDtoModel} from "../dto/response/challenge-dto.model";
import {QuestionAnswer} from "../dto/response/question-answer.model";

@Injectable()
export class ChallengesEffects {

  constructor(private actions$: Actions, private store$: Store,
              private errorService: CommonComponentsService, private challengesApiService: ChallengesApiService) {
  }


  @Effect()
  getAllChallenges$: Observable<Action> = this.actions$
    .pipe(ofType(GET_ALL_CHALLENGES),
      switchMap((action: GetAllChallenges) => {
        return this.challengesApiService.getAllChallengesApi(action.paramMap,action.paramStateMap);
      }),
      switchMap((challenges: ChallengeDtoModel[]) => [
        new GetAllChallengesSuccess(challenges),
        new ChallengeLoadFail('')
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new ChallengeLoadFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )

  @Effect()
  getAllChallengesGeneral$: Observable<Action> = this.actions$
    .pipe(ofType(GET_ALL_CHALLENGES_GENERAL),
      switchMap((action: GetAllChallengesGeneral) => {
        return this.challengesApiService.getAllChallengesGeneralApi(action.paramMap,action.paramStateMap);
      }),
      switchMap((challenges: ChallengeDtoModel[]) => [
        new GetAllChallengesGeneralSuccess(challenges),
        new ChallengeLoadFail('')
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new ChallengeLoadFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )

  @Effect()
  getAllChallengesByUser$: Observable<Action> = this.actions$
    .pipe(ofType(GET_ALL_CHALLENGES_BY_USER),
      switchMap((action: GetAllChallengesByUser) => {
        return this.challengesApiService.getAllChallengesByUserApi(action.userId);
      }),
      switchMap((challenges: ChallengeDtoModel[]) => [
        new GetAllChallengesByUserSuccess(challenges),
        new ChallengeLoadFail('')
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new ChallengeLoadFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )

  @Effect()
  getQuestions$: Observable<Action> = this.actions$
    .pipe(ofType(GET_QUESTIONS_BY_ID),
      switchMap((action: GetQuestionsById) => {
        return this.challengesApiService.getQuestionsApi(action.id);
      }),
      switchMap((questions: QuestionAnswer[]) => [
        new GetQuestionsByIdSuccess(questions)
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new GetQuestionsByIdFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )

  @Effect()
  addChallenge$: Observable<Action> = this.actions$
    .pipe(ofType(CREATE_CHALLENGE),
      switchMap((action: CreateChallenge) => {
        return this.challengesApiService.createChallengeApi(action.newChallenge);
      }),
      switchMap((response: string) => [
        new CreateChallengeSuccess(response),
        new GetAllChallenges()
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new CreateChallengeFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )

  @Effect()
  mergeChallenge$: Observable<Action> = this.actions$
    .pipe(ofType(MERGE_CHALLENGE),
      switchMap((action: MergeChallenge) => {
        return this.challengesApiService.mergeChallengeApi(action.challengeId, action.newChallenge);
      }),
      switchMap((response: string) => [
        new MergeChallengeSuccess(response),
        new GetAllChallenges()
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new MergeChallengeFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )

  @Effect()
  addCompetitor$: Observable<Action> = this.actions$
    .pipe(ofType(ADD_COMPETITOR),
      switchMap((action: AddCompetitor) => {
        return this.challengesApiService.addCompetitorChallengeApi(action.challengeId, action.obtainPoints);
      }),
      switchMap((response: string) => [
        new AddCompetitorSuccess(response),
        new GetAllChallenges()
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new AddCompetitorFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )

  @Effect()
  deleteChallenge$: Observable<Action> = this.actions$
    .pipe(ofType(DELETE_CHALLENGE),
      switchMap((action: DeleteChallenge) => {
        return this.challengesApiService.deleteChallengeApi(action.challengeId);
      }),
      switchMap((response: string) => [
        new DeleteChallengeSuccess(response),
        new GetAllChallenges()
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new DeleteChallengeFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )

}
