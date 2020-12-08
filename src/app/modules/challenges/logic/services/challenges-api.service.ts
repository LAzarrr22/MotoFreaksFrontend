import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ChallengeDtoModel} from "../dto/response/challenge-dto.model";
import {environment} from "../../../../../environments/environment";
import {QuestionAnswer} from "../dto/response/question-answer.model";
import {NewChallengeModel} from "../dto/request/new-challenge.model";
import {map} from "rxjs/operators";

@Injectable()
export class ChallengesApiService {
  constructor(private httpClient: HttpClient) {
  }

  createChallengeApi(newChallenge: NewChallengeModel) {
    return this.httpClient.put(`${environment.apiUrl}/challenge`, {
      name: newChallenge.name,
      general: newChallenge.general,
      company: newChallenge.company,
      model: newChallenge.model,
      generation: newChallenge.generation,
      qaList: newChallenge.qaList
    })
  }

  mergeChallengeApi(challengeId: string, newChallenge: NewChallengeModel) {
    return this.httpClient.post(`${environment.apiUrl}/challenge/${challengeId}`, {
      name: newChallenge.name,
      general: newChallenge.general,
      company: newChallenge.company,
      model: newChallenge.model,
      generation: newChallenge.generation,
      qaList: newChallenge.qaList
    })
  }

  addCompetitorChallengeApi(challengeId: string, points: number) {
    return this.httpClient.post(`${environment.apiUrl}/challenge/${challengeId}/competitor/points/${points}`, {})
  }

  deleteChallengeApi(challengeId: string) {
    return this.httpClient.delete(`${environment.apiUrl}/challenge/${challengeId}`)
  }

  getAllChallengesApi(paramMap: Map<string, string>, paramStateMap: Map<string, string>): Observable<ChallengeDtoModel[]> {
    let params = new HttpParams();
    if(paramMap) {
      for (let paramMapElement of paramMap) {
        params = params.set(paramMapElement[0], paramMapElement[1])
      }}
    if(paramStateMap) {
      for (let paramMapElement of paramStateMap) {
        params = params.set(paramMapElement[0], paramMapElement[1])
      }
    }
    return this.httpClient.get<ChallengeDtoModel[]>(`${environment.apiUrl}/challenge`,{params})
  }

  getAllChallengesGeneralApi(paramMap: Map<string, string>, paramStateMap: Map<string, string>): Observable<ChallengeDtoModel[]> {
    let params = new HttpParams();
    if(paramMap) {
      for (let paramMapElement of paramMap) {
        params = params.set(paramMapElement[0], paramMapElement[1])
      }}
    if(paramStateMap) {
      for (let paramMapElement of paramStateMap) {
        params = params.set(paramMapElement[0], paramMapElement[1])
      }
    }
    return this.httpClient.get<ChallengeDtoModel[]>(`${environment.apiUrl}/challenge/general`,{params})
  }

  getAllChallengesByUserApi(id: string): Observable<ChallengeDtoModel[]> {
    return this.httpClient.get<ChallengeDtoModel[]>(`${environment.apiUrl}/challenge/byUser/${id}`)
  }

  getQuestionsApi(id: string): Observable<QuestionAnswer[]> {
    return this.httpClient.get<QuestionAnswer[]>(`${environment.apiUrl}/challenge/${id}/questions`)
  }

  getValidationNameApi(name: string): Observable<boolean> {
   return  this.httpClient.get<boolean>(`${environment.apiUrl}/challenge/exists/${name}`);
  }
}
