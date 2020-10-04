import {Store} from "@ngrx/store";
import {AuthenticationState, getRoles, isUserLoggedIn} from "../store";
import {Injectable} from "@angular/core";
import {RolesEnum} from "../enums/roles.enum";

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

  isAdmin() {
    return !!this.roles.find(role => role == RolesEnum.ADMIN);
  }

  isModerator() {
    return !!this.roles.find(role => role == RolesEnum.MODERATOR);
  }

  isUser() {
    return !!this.roles.find(role => role == RolesEnum.USER);
  }

  isUnknown() {
    return !!this.roles.find(role => role == RolesEnum.UNKNOWN);
  }
}