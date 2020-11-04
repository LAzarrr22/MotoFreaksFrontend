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
import {AuthenticationService} from "./logic/services/authentication.service";
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationRoutingModule} from "./authentication-routing.module";
import {AuthService} from "./logic/services/auth.service";
import {AppCommonModule} from "../common/common.module";
import {AngularMaterialModule} from "../../shared/angular-material.module";
import {reducer} from "./logic/reducers/authentication.reducers";


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
    StoreModule.forFeature('authentication', reducer),
    EffectsModule.forFeature([AuthenticationEffects]),
    AngularMaterialModule,
    AppCommonModule,

  ],
  providers: [
    AuthenticationService,
    AuthService
  ]

})
export class AuthenticationModule {
}
