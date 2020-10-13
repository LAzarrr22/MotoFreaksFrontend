import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MyProfileModel} from "../dto/response/my-profile.model";
import {environment} from "../../../../../environments/environment";
import {map} from "rxjs/operators";
import {MergeUserModel} from "../dto/request/merge-user.model";
import {AddressModel} from "../dto/models/address.model";
import {ContactModel} from "../dto/models/contact.model";

@Injectable()
export class MyProfileApiService {
  constructor(private readonly httpClient: HttpClient) {
  }

  getMyProfile(): Observable<MyProfileModel> {
    return this.httpClient.get<MyProfileModel>(`${environment.apiUrl}/user/show/profile`)
      .pipe(map(data => new MyProfileModel(data.id, data.username, data.name, data.lastName, data.gender, data.enabled, data.createdDate,
        data.updatedDate, data.loginsHistory, data.carsList, data.contact, data.address, data.points, data.friendsList)))
  }

  mergeMyProfile(mergeUser: MergeUserModel): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/user/merge`,
      {
        enabled: mergeUser.enabled,
        gender: mergeUser.gender,
        lastName: mergeUser.lastName,
        name: mergeUser.name,
        password: mergeUser.password
      });
  }

  mergeMyAddress(mergeAddress: AddressModel): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/user/merge/address`,
      {
        city: mergeAddress.city,
        country: mergeAddress.country,
        state: mergeAddress.state,
        street: mergeAddress.street
      });
  }

  mergeMyContact(mergeContact: ContactModel): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/user/merge/contact`,
      {
        email: mergeContact.email,
        phone: mergeContact.phone,
        facebook: mergeContact.facebook,
        instagram: mergeContact.instagram,
        skype: mergeContact.skype,
        twitter: mergeContact.twitter,
        youtube: mergeContact.youtube,
      });
  }

  getMyUnreadMessagesCount(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/user/unread/message`);
  }

}
