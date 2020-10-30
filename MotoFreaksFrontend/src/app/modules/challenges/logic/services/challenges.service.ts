import {Injectable} from "@angular/core";
import {NewChallengeModel} from "../dto/request/new-challenge.model";
import {Observable} from "rxjs";
import {ChallengeDtoModel} from "../dto/response/challenge-dto.model";
import {QuestionAnswer} from "../dto/response/question-answer.model";
import {Store} from "@ngrx/store";
import {ChallengesState, getAllChallenges, getSelectedQuestions} from "../reducers/challenges.reducers";
import {
  AddCompetitor,
  CreateChallenge,
  GetAllChallenges,
  GetAllChallengesByCar,
  GetAllChallengesByUser,
  GetQuestionsById
} from "../actions/challenges.actions";

@Injectable()
export class ChallengesService {

  constructor(private store: Store<ChallengesState>) {
  }

  createChallenge(newChallenge: NewChallengeModel) {
    this.store.dispatch(new CreateChallenge(newChallenge));
    setTimeout(() => {
      this.store.dispatch(new GetAllChallenges());
    }, 0);
  }

  addCompetitor(challengeId: string) {
    this.store.dispatch(new AddCompetitor(challengeId));
    setTimeout(() => {
      this.store.dispatch(new GetAllChallenges());
    }, 0);
  }

  getAllChallenges(): Observable<ChallengeDtoModel[]> {
    this.store.dispatch(new GetAllChallenges());
    return this.store.select(getAllChallenges);
  }

  getAllChallengesByCar(paramMap: Map<string, string>): Observable<ChallengeDtoModel[]> {
    this.store.dispatch(new GetAllChallengesByCar(paramMap));
    return this.store.select(getAllChallenges);
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
