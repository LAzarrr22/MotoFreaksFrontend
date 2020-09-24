import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {getAuthToken, isUserLoggedIn} from "../../logic/store";
import {LoginModel} from "../../logic/dto/request/login.model";
import {UserLogin, UserLogout} from "../../logic/actions/authentication.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogged: boolean;
  token: string;
  constructor(private readonly store: Store) {
    this.store.select(isUserLoggedIn).subscribe(isLogged => this.isLogged = (isLogged.valueOf()))
    this.store.select(getAuthToken).subscribe(token => this.token = token)
  }

  ngOnInit(): void {
  }

  login() {
    this.store.dispatch(new UserLogin(new LoginModel('admin_mtfr', 'admin_mtfr')))//tODO
  }

  fail() {
    this.store.dispatch(new UserLogin(new LoginModel('admin_mtfrewt', 'admin_mtwettfr')))//tODO
  }

  logout() {
    this.store.dispatch(new UserLogout);
  }
}
