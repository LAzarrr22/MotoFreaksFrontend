import {Injectable} from "@angular/core";
import {NewChallengeModel} from "../dto/request/new-challenge.model";
import {Observable} from "rxjs";
import {ChallengeDtoModel} from "../dto/response/challenge-dto.model";
import {QuestionAnswer} from "../dto/response/question-answer.model";
import {Store} from "@ngrx/store";
import {ChallengesState, getAllChallenges, getSelectedQuestions, isLoading} from "../reducers/challenges.reducers";
import {
  AddCompetitor,
  CreateChallenge,
  DeleteChallenge,
  GetAllChallenges,
  GetAllChallengesByUser,
  GetAllChallengesGeneral,
  GetQuestionsById,
  MergeChallenge
} from "../actions/challenges.actions";

@Injectable()
export class ChallengesService {

  constructor(private store: Store<ChallengesState>) {
  }
  getAllChallenges(paramMap: Map<string, string> = null, paramStateMap: Map<string, string> = null): Observable<ChallengeDtoModel[]> {
    this.store.dispatch(new GetAllChallenges(paramMap, paramStateMap));
    return this.store.select(getAllChallenges);
  }
isLoading(){
    return this.store.select(isLoading);
}
  getAllGeneralChallenges(paramMap: Map<string, string> = null, paramStateMap: Map<string, string> = null) {
    this.store.dispatch(new GetAllChallengesGeneral(paramMap, paramStateMap));
    return this.store.select(getAllChallenges);
  }
  createChallenge(newChallenge: NewChallengeModel) {
    this.store.dispatch(new CreateChallenge(newChallenge));
    setTimeout(() => {
      this.store.dispatch(new GetAllChallenges());
    }, 0);
  }

  mergeChallenge(challengeId: string, newChallenge: NewChallengeModel) {
    this.store.dispatch(new MergeChallenge(challengeId, newChallenge));
    setTimeout(() => {
      this.store.dispatch(new GetAllChallenges());
    }, 0);
  }

  addCompetitor(challengeId: string, obtainPoints: number) {
    this.store.dispatch(new AddCompetitor(challengeId, obtainPoints));
    setTimeout(() => {
      this.store.dispatch(new GetAllChallenges());
    }, 0);
  }

  deleteChallenge(challengeId: string) {
    this.store.dispatch(new DeleteChallenge(challengeId));
    setTimeout(() => {
      this.store.dispatch(new GetAllChallenges());
    }, 0);
  }

  getAllChallengesByUser(id: string): Observable<ChallengeDtoModel[]> {
    this.store.dispatch(new GetAllChallengesByUser(id));
    return this.store.select(getAllChallenges);
  }

  getQuestions(id: string): Observable<QuestionAnswer[]> {
    this.store.dispatch(new GetQuestionsById(id));
    return this.store.select(getSelectedQuestions);
  }

}
