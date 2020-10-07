import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {MyProfileModel} from "../dto/response/my-profile.model";
import {Store} from "@ngrx/store";
import {getMyProfile, MyProfileState} from "../reducers/my-profile.reducers";
import {GetMyProfile} from "../action/my-profile.action";

@Injectable()
export class ProfileService {
  constructor(private store: Store<MyProfileState>) {
  }

  getMyProfile(): Observable<MyProfileModel> {
    this.store.dispatch(new GetMyProfile());
    return this.store.select(getMyProfile);
  }

}
