import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs';
import {LoginSuccessfulDto} from '../dto/response/login-successful.model'
import {map} from 'rxjs/operators';
import {LoginModel} from "../dto/request/login.model";
import {RegisterModel} from "../dto/request/register.model";

@Injectable()
export class AuthenticationService {
  constructor(private readonly httpClient: HttpClient) {
  }

  login(login: LoginModel): Observable<LoginSuccessfulDto> {
    return this.httpClient.post<LoginSuccessfulDto>(`${environment.apiUrl}/api/auth/login`, {
      username: login.username,
      password: login.password
    })
      .pipe(map(data => new LoginSuccessfulDto(data.username, data.token, data.roles)));
  }

  register(register: RegisterModel): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/api/auth/register`,
      {username: register.username, password: register.password, name: register.name, lastName: register.lastName});
  }

}
