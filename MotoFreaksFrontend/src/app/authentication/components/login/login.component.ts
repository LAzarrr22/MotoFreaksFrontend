import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {isUserLoggedIn} from "../../logic/store";
import {LoginModel} from "../../logic/dto/request/login.model";
import {UserLogin} from "../../logic/actions/authentication.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private readonly store: Store) {

  }

  ngOnInit(): void {
  }

  login() {
    this.store.dispatch(new UserLogin(new LoginModel('admin_mtfr', 'admin_mtfr')))//tODO
  }

  fail() {
    this.store.dispatch(new UserLogin(new LoginModel('admin_mtfrewt', 'admin_mtwettfr')))//tODO
  }

  state() {
    this.store.select(isUserLoggedIn).subscribe(isLogged => console.log(isLogged.valueOf()))
  }


}
