import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MyProfileModel} from "../dto/response/my-profile.model";
import {environment} from "../../../../../environments/environment";
import {map} from "rxjs/operators";
import {MergeUserModel} from "../dto/request/merge-user.model";
import {AddressModel} from "../dto/models/address.model";
import {ContactModel} from "../dto/models/contact.model";
import {NewCarModel} from "../dto/request/new-car.model";
import {FriendUserModel} from "../dto/response/friend-user.model";

@Injectable()
export class MyProfileApiService {
  constructor(private readonly httpClient: HttpClient) {
  }

  getMyProfile(): Observable<MyProfileModel> {
    return this.httpClient.get<MyProfileModel>(`${environment.apiUrl}/user/show/profile`)
      .pipe(map(data => new MyProfileModel(data.id, data.username, data.name, data.lastName, data.gender, data.enabled, data.createdDate,
        data.updatedDate, data.loginsHistory, data.carsList, data.contact, data.address, data.points)))
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

  addCar(newCar: NewCarModel): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/user/add/car`,
      {
        name: newCar.name,
        company: newCar.company,
        model: newCar.model,
        generation: newCar.generation,
        year: newCar.year,
        color: newCar.color,
        engine: newCar.engine,
        horsepower: newCar.horsepower,
        registration: newCar.registration,
        torque: newCar.torque,
      })
  }

  mergeCar(newCar: NewCarModel, id: string): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/user/merge/car/${id}`,
      {
        name: newCar.name,
        company: newCar.company,
        model: newCar.model,
        generation: newCar.generation,
        year: newCar.year,
        color: newCar.color,
        engine: newCar.engine,
        horsepower: newCar.horsepower,
        registration: newCar.registration,
        torque: newCar.torque,
      })
  }

  removeCar(id: string) {
    return this.httpClient.delete(`${environment.apiUrl}/user/remove/car/${id}`);
  }

  getMyFriends(): Observable<FriendUserModel[]> {
    return this.httpClient.get<FriendUserModel[]>(`${environment.apiUrl}/user/get/friends`)
      .pipe(map(friends => friends.map(friend => new FriendUserModel(friend.id, friend.name, friend.lastName, friend.gender))))
  }

  addPoints(points: number) {
    return this.httpClient.post(`${environment.apiUrl}/user/add/points/${points}`, {})
  }
}
