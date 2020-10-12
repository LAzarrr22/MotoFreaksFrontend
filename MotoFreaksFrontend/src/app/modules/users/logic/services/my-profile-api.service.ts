import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MyProfileModel} from "../dto/response/my-profile.model";
import {environment} from "../../../../../environments/environment";
import {map} from "rxjs/operators";

@Injectable()
export class MyProfileApiService {
  constructor(private readonly httpClient: HttpClient) {
  }

  getMyProfile(): Observable<MyProfileModel> {
    return this.httpClient.get<MyProfileModel>(`${environment.apiUrl}/user/show/profile`)
      .pipe(map(data => new MyProfileModel(data.id, data.username, data.name, data.lastName, data.gender, data.enabled, data.createdDate,
        data.updatedDate, data.loginsHistory, data.carsList, data.contact, data.address, data.points, data.friendsList,
        data.messages)))
  }

}
