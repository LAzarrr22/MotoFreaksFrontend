import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {LogoutComponent} from './components/logout/logout.component';
import {LogoutPageComponent} from './pages/logout-page/logout-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {EffectsModule} from "@ngrx/effects";
import {AuthenticationEffects} from "./logic/effects/authentication.effects";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./logic/store";
import {AuthenticationService} from "./logic/services/authentication.service";
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationRoutingModule} from "./authentication-routing.module";
import {AuthService} from "./logic/services/auth.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [LoginComponent, RegisterComponent, LogoutComponent, LogoutPageComponent, RegisterPageComponent, LoginPageComponent],
  exports: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthenticationRoutingModule,
    StoreModule.forFeature('authentication', reducers),
    EffectsModule.forFeature([AuthenticationEffects]),
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,

  ],
  providers: [
    AuthenticationService,
    AuthService
  ]

})
export class AuthenticationModule {
}
