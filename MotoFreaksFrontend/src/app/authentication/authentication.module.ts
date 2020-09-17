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


@NgModule({
  declarations: [LoginComponent, RegisterComponent, LogoutComponent, LogoutPageComponent, RegisterPageComponent, LoginPageComponent],
  exports: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    StoreModule.forFeature('authentication', reducers),
    EffectsModule.forFeature([AuthenticationEffects]),

  ],
  providers: [
    AuthenticationService
  ]

})
export class AuthenticationModule {
}
