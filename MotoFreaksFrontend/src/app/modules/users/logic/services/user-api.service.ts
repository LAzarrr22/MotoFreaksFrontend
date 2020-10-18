import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {UserModel} from "../dto/response/user-model";
import {environment} from "../../../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable()
export class UserApiService {
  constructor(private readonly httpClient: HttpClient) {
  }

  getAllUsersApi(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(`${environment.apiUrl}/user/all`)
      .pipe(map(users => users.map(user => new UserModel(user.id, user.name, user.lastName, user.gender, user.enabled, user.carsList
        , user.contact, user.address, user.points, user.friendsList, user.roles, user.isYourFriend))))
  }

  addFriend(id: string): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/user/add/friend/${id}`, {})
  }
}
