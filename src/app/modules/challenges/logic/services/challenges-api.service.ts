import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ChallengeDtoModel} from "../dto/response/challenge-dto.model";
import {environment} from "../../../../../environments/environment";
import {QuestionAnswer} from "../dto/response/question-answer.model";
import {NewChallengeModel} from "../dto/request/new-challenge.model";

@Injectable()
export class ChallengesApiService {
  constructor(private httpClient: HttpClient) {
  }

  createChallengeApi(newChallenge: NewChallengeModel) {
    return this.httpClient.post(`${environment.apiUrl}/challenge/create`, {
      name: newChallenge.name,
      general: newChallenge.general,
      company: newChallenge.company,
      model: newChallenge.model,
      generation: newChallenge.generation,
      qaList: newChallenge.qaList
    })
  }

  mergeChallengeApi(challengeId: string, newChallenge: NewChallengeModel) {
    return this.httpClient.post(`${environment.apiUrl}/challenge/merge/${challengeId}`, {
      name: newChallenge.name,
      general: newChallenge.general,
      company: newChallenge.company,
      model: newChallenge.model,
      generation: newChallenge.generation,
      qaList: newChallenge.qaList
    })
  }

  addCompetitorChallengeApi(challengeId: string, points: number) {
    return this.httpClient.post(`${environment.apiUrl}/challenge/id/${challengeId}/add/competitor/points/${points}`, {})
  }

  deleteChallengeApi(challengeId: string) {
    return this.httpClient.delete(`${environment.apiUrl}/challenge/delete/${challengeId}`)
  }

  getAllChallengesApi(): Observable<ChallengeDtoModel[]> {
    return this.httpClient.get<ChallengeDtoModel[]>(`${environment.apiUrl}/challenge/get/all`)
  }

  getAllChallengesGeneralApi(): Observable<ChallengeDtoModel[]> {
    return this.httpClient.get<ChallengeDtoModel[]>(`${environment.apiUrl}/challenge/get/all/general`)
  }

  getAllChallengesByCarApi(paramMap: Map<string, string>): Observable<ChallengeDtoModel[]> {
    let params = new HttpParams();
    for (let paramMapElement of paramMap) {
      params = params.set(paramMapElement[0], paramMapElement[1])
    }
    return this.httpClient.get<ChallengeDtoModel[]>(`${environment.apiUrl}/challenge/get/findBy/car`, {params})
  }

  getAllChallengesByUserApi(id: string): Observable<ChallengeDtoModel[]> {
    return this.httpClient.get<ChallengeDtoModel[]>(`${environment.apiUrl}/challenge/get/findBy/user/id/${id}`)
  }

  getQuestionsApi(id: string): Observable<QuestionAnswer[]> {
    return this.httpClient.get<QuestionAnswer[]>(`${environment.apiUrl}/challenge/get/questions/id/${id}`)
  }
}
