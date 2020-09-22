import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {isUserLoggedIn} from "../../logic/store";
import {LoginModel} from "../../logic/dto/request/login.model";
import {UserLogin, UserLogout} from "../../logic/actions/authentication.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogged: boolean;
  constructor(private readonly store: Store) {
    this.store.select(isUserLoggedIn).subscribe(isLogged => this.isLogged = (isLogged.valueOf()))
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
