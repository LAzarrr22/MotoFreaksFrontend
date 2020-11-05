import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable()
export class CarsApiService {

  constructor(private readonly httpClient: HttpClient) {
  }

  getCompanies(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.apiUrl}/cars/all/companies`)
  }

  getModels(company: string): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.apiUrl}/cars/all/models/${company}`)
  }

  getGenerations(company: string, model: string): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.apiUrl}/cars/all/generations/${company}/${model}`)
  }

  addCompany(company: string): Observable<string[]> {
    return this.httpClient.post<string[]>(`${environment.apiUrl}/cars/add/company/${company}`,{})
  }

  addModel(company: string, model: string): Observable<string[]> {
    return this.httpClient.post<string[]>(`${environment.apiUrl}/cars/add/model/${company}/${model}`,{})
  }

  addGeneration(company: string, model: string, generation: string): Observable<string[]> {
    return this.httpClient.post<string[]>(`${environment.apiUrl}/cars/add/generation/${company}/${model}/${generation}`,{})
  }

deleteCompany(company: string): Observable<string[]> {
    return this.httpClient.delete<string[]>(`${environment.apiUrl}/cars/delete/company/${company}`)
  }

  deleteModel(company: string, model: string): Observable<string[]> {
    return this.httpClient.delete<string[]>(`${environment.apiUrl}/cars/delete/model/${company}/${model}`)
  }

  deleteGeneration(company: string, model: string, generation: string): Observable<string[]> {
    return this.httpClient.delete<string[]>(`${environment.apiUrl}/cars/delete/generation/${company}/${model}/${generation}`)
  }


}
