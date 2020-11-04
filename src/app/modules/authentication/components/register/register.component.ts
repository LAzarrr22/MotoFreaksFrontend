import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {USER_REGISTER_FAIL, UserLoginFail, UserRegister} from "../../logic/actions/authentication.actions";
import {RegisterModel} from "../../logic/dto/request/register.model";
import {Actions, ofType} from "@ngrx/effects";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {ValidationMessageMap} from "../../../../shared/interfaces/validation-message-map";
import {AuthenticationState} from "../../logic/reducers/authentication.reducers";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  errorMessage: Observable<string>
  validationMessages: ValidationMessageMap;

  constructor(private readonly store: Store<AuthenticationState>, private formBuilder: FormBuilder, private actions: Actions) {
    this.errorMessage = this.actions.pipe(ofType(USER_REGISTER_FAIL), map((action: UserLoginFail) => action.payload));
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required, Validators.pattern(new RegExp('(?=.*[a-z])(?=.*[A-Z])')), Validators.minLength(6),]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.pattern(new RegExp('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)')), Validators.minLength(6)]),
      repeatPassword: new FormControl('')
    }, {validators: [this.passwordMatchValidator]});
    this.validationMessages = {
      repeatPassword: {
        notMatchingPassword: 'Passwords not equals'
      },
      password: {
        pattern: '<p>Password must contain: </p>' +
          '<ul>' +
          '<li>Have at least one uppercase</li>' +
          '<li>Have at least one lowercase</li>' +
          '<li>Have at least one number</li>' +
          '<li>Have at least one symbol</li>' +
          '</ul>',
        minlength: 'Password must be at least 6 characters long'
      },
      username: {
        minlength: 'Username must be at least 6 characters long',
        pattern: '<p>Username must contain: </p>' +
          '<ul>' +
          '<li>Have at least one uppercase</li>' +
          '<li>Have at least one lowercase</li>' +
          '</ul>'
      }
    }
  }

  passwordMatchValidator(group: FormGroup): any {
    if (group) {
      if (group.get('password').value !== group.get('repeatPassword').value) {
        group.controls['repeatPassword'].setErrors({notMatchingPassword: true});
        return {notMatchingPassword: true};
      } else {
        group.controls['repeatPassword'].setErrors(null);
      }
    }
    return null;
  }

  getName() {
    return this.form.controls.name.value;
  }

  getLastName() {
    return this.form.controls.lastName.value;
  }

  getPassword() {
    return this.form.controls.password.value;
  }

  getUsername() {
    return this.form.controls.username.value;
  }

  getEmail() {
    return this.form.controls.email.value;
  }

  register() {
    if (this.form.valid) {
      this.store.dispatch(
        new UserRegister(
          new RegisterModel(this.getName(), this.getLastName(), this.getPassword(), this.getUsername(), this.getEmail())));
    }
  }
}
