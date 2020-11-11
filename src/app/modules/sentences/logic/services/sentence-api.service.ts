import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {SentenceModel} from "../model/sentence.model";
import {map} from "rxjs/operators";
import {NewSentenceModel} from "../model/new-sentence.model";

@Injectable()
export class SentenceApiService {

  constructor(private httpClient:HttpClient) {

  }

  getAll():Observable<SentenceModel[]>{
    return this.httpClient.get<SentenceModel[]>(`${environment.apiUrl}/sentence/get/all`)
  }

  mergeSentence(newSentence : NewSentenceModel):Observable<SentenceModel[]>{
    return this.httpClient.post<SentenceModel[]>(`${environment.apiUrl}/sentence/modify/merge`,{
      id: newSentence.id,
      name: newSentence.name,
      translation: newSentence.translation
    })
  }

  deleteSentence(id:string):Observable<SentenceModel[]>{
    return this.httpClient.delete<SentenceModel[]>(`${environment.apiUrl}/sentence/modify/delete/${id}`)
  }
}
