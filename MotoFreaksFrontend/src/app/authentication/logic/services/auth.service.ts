import {Store} from "@ngrx/store";
import {isUserLoggedIn} from "../store";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
  isLogged

  constructor(private store: Store) {
    this.store.select(isUserLoggedIn).subscribe(loggedState => this.isLogged = loggedState.valueOf())
  }

  isLoggedUser() {
    return this.isLogged;
  }
}
