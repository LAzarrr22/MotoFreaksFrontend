import {Injectable} from "@angular/core";
import {MessageApiService} from "../services/message-api.service";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Action, Store} from "@ngrx/store";
import {CommonComponentsService} from "../../../common/common.service";
import {Observable} from "rxjs";
import {catchError, switchMap} from "rxjs/operators";
import {GET_ALL_MESSAGES, GetAllMessagesFail, GetAllMessagesSuccess} from "../action/messages.action";
import {MessageDataModel} from "../dto/response/message-data.model";

@Injectable()
export class MessagesEffects {

  constructor(private messageApiService: MessageApiService, private actions$: Actions, private store$: Store
    , private errorService: CommonComponentsService) {
  }

  @Effect()
  getAllMessages$: Observable<Action> = this.actions$
    .pipe(
      ofType(GET_ALL_MESSAGES),
      switchMap(() => {
        return this.messageApiService.getAllMyMessages();
      }),
      switchMap((response: MessageDataModel[]) => [
        new GetAllMessagesSuccess(response),
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new GetAllMessagesFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )

}
