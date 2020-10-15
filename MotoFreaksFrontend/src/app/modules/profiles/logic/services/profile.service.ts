import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MyProfileModel} from "../dto/response/my-profile.model";
import {Store} from "@ngrx/store";
import {getMyProfile, MyProfileState} from "../reducers/my-profile.reducers";
import {
  AddMyCar,
  GetMyProfile,
  MergeMyAddress,
  MergeMyCar,
  MergeMyContact,
  MergeMyProfile,
  RemoveMyCar
} from "../action/my-profile.action";
import {MergeUserModel} from "../dto/request/merge-user.model";
import {AddressModel} from "../dto/models/address.model";
import {ContactModel} from "../dto/models/contact.model";
import {MyProfileApiService} from "./my-profile-api.service";
import {NewCarModel} from "../dto/request/new-car.model";

@Injectable()
export class ProfileService {
  constructor(private store: Store<MyProfileState>, private apiMyProfile: MyProfileApiService) {
  }

  getMyProfile(): Observable<MyProfileModel> {
    this.store.dispatch(new GetMyProfile());
    return this.store.select(getMyProfile);
  }

  mergeProfile(mergeData: MergeUserModel) {
    this.store.dispatch(new MergeMyProfile(mergeData));
  }

  mergeAddress(mergeData: AddressModel) {
    this.store.dispatch(new MergeMyAddress(mergeData));
  }

  mergeContact(mergeData: ContactModel) {
    this.store.dispatch(new MergeMyContact(mergeData));
  }

  addCar(newCar: NewCarModel) {
    this.store.dispatch(new AddMyCar(newCar))
  }

  mergeCar(mergeCar: NewCarModel, id: string) {
    this.store.dispatch(new MergeMyCar(mergeCar, id))
  }

  removeCar(id: string) {
    this.store.dispatch(new RemoveMyCar(id))
  }
}
