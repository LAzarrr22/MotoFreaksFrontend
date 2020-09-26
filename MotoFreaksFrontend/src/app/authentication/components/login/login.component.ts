import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthenticationState, getAuthToken} from "../../logic/store";
import {LoginModel} from "../../logic/dto/request/login.model";
import {UserLogin, UserLogout} from "../../logic/actions/authentication.actions";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  isLogged: boolean;
  token: string;

  constructor(private readonly store: Store<AuthenticationState>, private router: Router) {
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
