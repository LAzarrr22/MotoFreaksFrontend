import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';
import {Observable} from 'rxjs';
import {LoginSuccessfulDto} from '../dto/response/login-successful.model'
import {map} from 'rxjs/operators';
import {LoginModel} from "../dto/request/login.model";
import {RegisterModel} from "../dto/request/register.model";
import {RolesEnum} from "../enums/roles.enum";

@Injectable()
export class AuthenticationService {
  constructor(private readonly httpClient: HttpClient) {
  }

  login(login: LoginModel): Observable<LoginSuccessfulDto> {
    return this.httpClient.post<LoginSuccessfulDto>(`${environment.apiUrl}/auth/login`, {
      username: login.username,
      password: login.password
    })
      .pipe(map(data => new LoginSuccessfulDto(data.username, data.validated, data.token, data.roles)));
  }

  register(register: RegisterModel): Observable<any> {
    return this.httpClient.put(`${environment.apiUrl}/auth/register`,
      {
        username: register.username,
        password: register.password,
        name: register.name,
        lastName: register.lastName,
        email: register.email
      });
  }

  setModerator(id: string): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/auth/set/moderator/${id}`, {})
  }

  setAdmin(id: string): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/auth/set/admin/${id}`, {})
  }

  getRoles(): Observable<RolesEnum[]> {
    return this.httpClient.get<RolesEnum[]>(`${environment.apiUrl}/auth/roles`)
  }
checkUserValidation():Observable<boolean>{
  return this.httpClient.get<boolean>(`${environment.apiUrl}/auth/validation`)
}
}
