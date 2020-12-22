import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MyProfileModel} from "../dto/response/my-profile.model";
import {Store} from "@ngrx/store";
import {getMyFriends, getMyProfile, isLoading, MyProfileState} from "../reducers/my-profile.reducers";
import {
  AddMyCar,
  AddPoints,
  GetMyFriends,
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
import {NewCarModel} from "../dto/request/new-car.model";
import {FriendUserModel} from "../dto/response/friend-user.model";
import {first} from "rxjs/operators";

@Injectable()
export class ProfileService {
  constructor(private store: Store<MyProfileState>) {
  }

  getMyProfile(): Observable<MyProfileModel> {
    this.store.dispatch(new GetMyProfile());
    this.store.dispatch(new GetMyFriends());
    return this.store.select(getMyProfile);
  }

  getMyId(): string {
    let id;
    this.store.select(getMyProfile).pipe(first()).subscribe(me => {
      id = me.id;
    })
    return id;
  }

  getMyName(): string {
    let name;
    this.store.select(getMyProfile).subscribe(me => {
      name = me.name;
    })
    return name;
  }

 getNameSubs() {
    return this.store.select(getMyProfile);
  }

  getMyLastName(): string {
    let lastName;
    this.store.select(getMyProfile).subscribe(me => {
      lastName = me.id;
    })
    return lastName;
  }

  getMyFriends(): Observable<FriendUserModel[]> {
    return this.store.select(getMyFriends);
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

  addPoints(points: number) {
    this.store.dispatch(new AddPoints(points));

  }

  isLoading() {
    return this.store.select(isLoading);
  }
}
