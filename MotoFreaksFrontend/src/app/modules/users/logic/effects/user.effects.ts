import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Action, Store} from "@ngrx/store";
import {CommonComponentsService} from "../../../common/common.service";
import {UserApiService} from "../services/user-api.service";
import {Observable} from "rxjs";
import {GET_ALL_USERS, GetAllUsersFail, GetAllUsersSuccess} from "../action/user.action";
import {catchError, switchMap} from "rxjs/operators";
import {UserModel} from "../dto/response/user-model";

@Injectable()
export class UserEffects {
  constructor(private action$: Actions, private store$: Store
    , private errorService: CommonComponentsService, private userApiService: UserApiService) {
  }

  @Effect()
  getAllUsers$: Observable<Action> = this.action$
    .pipe(ofType(GET_ALL_USERS),
      switchMap(() => {
        return this.userApiService.getAllUsersApi();
      }),
      switchMap((users: UserModel[]) => [
        new GetAllUsersSuccess(users),
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new GetAllUsersFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )

}
