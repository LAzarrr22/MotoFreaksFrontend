import {Actions, Effect, ofType} from "@ngrx/effects";
import {Action, Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {CommonComponentsService} from "../../../common/common.service";
import {Observable} from "rxjs";
import {MyProfileModel} from "../dto/response/my-profile.model";
import {GET_MY_PROFILE, GetMyProfileFail, GetMyProfileSuccess} from "../action/my-profile.action";
import {catchError, switchMap} from "rxjs/operators";
import {MyProfileService} from "../services/my-profile.service";

export class MyProfileEffects {
  constructor(private actions$: Actions, private store$: Store
    , private router: Router, private myProfileService: MyProfileService
    , private errorService: CommonComponentsService) {
  }


  @Effect()
  getMyProfile$: Observable<Action> = this.actions$
    .pipe(ofType(GET_MY_PROFILE),
      switchMap(() => {
        return this.myProfileService.getMyProfile();
      }),
      switchMap((profileData: MyProfileModel) => [
        new GetMyProfileSuccess(profileData),
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new GetMyProfileFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    );
}