import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable()
export class CarsApiService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getCompanies(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.apiUrl}/cars/company`)
  }

  getModels(company: string): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.apiUrl}/cars/model/${company}`)
  }

  getGenerations(company: string, model: string): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.apiUrl}/cars/generation/${company}/${model}`)
  }

  addCompany(company: string): Observable<string[]> {
    return this.httpClient.put<string[]>(`${environment.apiUrl}/cars/company/${company}`,{})
  }

  addModel(company: string, model: string): Observable<string[]> {
    return this.httpClient.put<string[]>(`${environment.apiUrl}/cars/model/${company}/${model}`,{})
  }

  addGeneration(company: string, model: string, generation: string): Observable<string[]> {
    return this.httpClient.put<string[]>(`${environment.apiUrl}/cars/generation/${company}/${model}/${generation}`,{})
  }

deleteCompany(company: string): Observable<string[]> {
    return this.httpClient.delete<string[]>(`${environment.apiUrl}/cars/company/${company}`)
  }

  deleteModel(company: string, model: string): Observable<string[]> {
    return this.httpClient.delete<string[]>(`${environment.apiUrl}/cars/model/${company}/${model}`)
  }

  deleteGeneration(company: string, model: string, generation: string): Observable<string[]> {
    return this.httpClient.delete<string[]>(`${environment.apiUrl}/cars/generation/${company}/${model}/${generation}`)
  }


}
