import {Store} from "@ngrx/store";
import {Injectable} from "@angular/core";
import {RolesEnum} from "../enums/roles.enum";
import {CheckValidation, SetAdmin, SetModerator} from "../actions/authentication.actions";
import {GetAllUsers} from "../../../users/logic/action/user.action";
import {GetMyFriends} from "../../../profiles/logic/action/my-profile.action";
import {AuthenticationState, getRoles, isUserLoggedIn, isValidated} from "../reducers/authentication.reducers";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {
  isLogged;
  roles: RolesEnum[];

  constructor(private store: Store<AuthenticationState>) {
    this.store.select(isUserLoggedIn).subscribe(loggedState => this.isLogged = loggedState.valueOf())
    this.store.select(getRoles).subscribe(roles => this.roles = roles);
  }

  isLoggedUser() {
    return this.isLogged;
  }

  isValidatedUser():Observable<boolean> {
    return this.store.select(isValidated);
  }

  getValidation(){
    this.store.dispatch(new CheckValidation())
  }

  getCurrentRoles() {
   return this.store.select(getRoles)
  }

  setAdmin(id: string) {
    this.store.dispatch(new SetAdmin(id))
    setTimeout(() => {
      this.store.dispatch(new GetAllUsers());
      this.store.dispatch(new GetMyFriends());
    }, 300)
  }

  setModerator(id: string) {
    this.store.dispatch(new SetModerator(id))
    setTimeout(() => {
      this.store.dispatch(new GetAllUsers());
      this.store.dispatch(new GetMyFriends());
    }, 300)
  }

  isAdmin(roles: RolesEnum[] =this.roles) {
    return !!roles.find(role => role == RolesEnum.ADMIN);
  }

  isModerator(roles: RolesEnum[] =this.roles) {
    return !!roles.find(role => role == RolesEnum.MODERATOR);
  }

  isUser() {
    return !!this.roles.find(role => role == RolesEnum.USER);
  }

  isUnknown() {
    return !!this.roles.find(role => role == RolesEnum.UNKNOWN);
  }
}
