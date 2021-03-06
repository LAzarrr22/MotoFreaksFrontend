import {Injectable} from "@angular/core";
import {MessageApiService} from "../services/message-api.service";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {Action, Store} from "@ngrx/store";
import {CommonComponentsService} from "../../../common/common.service";
import {Observable} from "rxjs";
import {catchError, switchMap} from "rxjs/operators";
import {
  GET_ALL_MESSAGES_BY_USER,
  GET_ALL_MESSAGES_CHATS,
  GET_UNREAD_MESSAGES,
  GetAllChatsMessagesFail,
  GetAllChatsMessagesSuccess, GetAllMessagesByUser, GetAllMessagesByUserFail, GetAllMessagesByUserSuccess,
  GetUnreadMessagesFail,
  GetUnreadMessagesSuccess,
  READ_MESSAGES,
  ReadMessages,
  ReadMessagesFail,
  ReadMessagesSuccess,
  SEND_MESSAGE,
  SendMessage,
  SendMessageFail,
  SendMessageSuccess
} from "../action/messages.action";
import {MessageDataModel} from "../dto/response/message-data.model";
import {MessageModel} from "../dto/model/message.model";

@Injectable()
export class MessagesEffects {

  constructor(private messageApiService: MessageApiService, private actions$: Actions, private store$: Store
    , private errorService: CommonComponentsService) {
  }

  @Effect()
  getUnreadMessages$: Observable<Action> = this.actions$
    .pipe(
      ofType(GET_UNREAD_MESSAGES),
      switchMap(() => {
        return this.messageApiService.getMyUnreadMessagesCount();
      }),
      switchMap((unread: number) => [
        new GetUnreadMessagesSuccess(unread),
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new GetUnreadMessagesFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )

  @Effect()
  getAllChats$: Observable<Action> = this.actions$
    .pipe(
      ofType(GET_ALL_MESSAGES_CHATS),
      switchMap(() => {
        return this.messageApiService.getAllMyChats();
      }),
      switchMap((response: MessageDataModel[]) => [
        new GetAllChatsMessagesSuccess(response),
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new GetAllChatsMessagesFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )

  @Effect()
  getAllMessageUser$: Observable<Action> = this.actions$
    .pipe(
      ofType(GET_ALL_MESSAGES_BY_USER),
      switchMap((action: GetAllMessagesByUser) => {
        return this.messageApiService.getMessages(action.id);
      }),
      switchMap((response: MessageModel[]) => [
        new GetAllMessagesByUserSuccess(response),
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new GetAllMessagesByUserFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )

  @Effect()
  sendMessage$: Observable<Action> = this.actions$
    .pipe(
      ofType(SEND_MESSAGE),
      switchMap((action: SendMessage) => {
        return this.messageApiService.sendMessage(action.id, action.content);
      }),
      switchMap((response: MessageDataModel[]) => [
        new SendMessageSuccess(response),
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new SendMessageFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )

  @Effect()
  readMessages$: Observable<Action> = this.actions$
    .pipe(
      ofType(READ_MESSAGES),
      switchMap((action: ReadMessages) => {
        return this.messageApiService.readMessages(action.id);
      }),
      switchMap((response: string) => [
        new ReadMessagesSuccess(response),
      ]),
      catchError((error, caught) => {
        this.store$.dispatch(new ReadMessagesFail(error.error.message));
        this.errorService.error(error);
        return caught;
      })
    )

}
