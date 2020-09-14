import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {LogoutComponent} from './components/logout/logout.component';
import {LogoutPageComponent} from './pages/logout-page/logout-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, LogoutComponent, LogoutPageComponent, RegisterPageComponent, LoginPageComponent],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule {
}
