import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {LoginModel} from "../../logic/dto/request/login.model";
import {USER_LOGIN_FAIL, UserLogin, UserLoginFail} from "../../logic/actions/authentication.actions";
import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {Actions, ofType} from "@ngrx/effects";
import {map} from "rxjs/operators";
import {AuthenticationState, isLoading, isUserLoggedIn} from "../../logic/reducers/authentication.reducers";

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
  errorMessage: Observable<string>
  loading: Observable<boolean>

  constructor(private readonly store: Store<AuthenticationState>, private actions: Actions) {
    this.errorMessage = this.actions.pipe(ofType(USER_LOGIN_FAIL), map((action: UserLoginFail) => action.payload));
    this.loading=this.store.select(isLoading);
  }

  ngOnInit(): void {
  }

  login() {
    this.store.dispatch(new UserLogin(new LoginModel(this.form.controls.username.value, this.form.controls.password.value)))
  }

}
