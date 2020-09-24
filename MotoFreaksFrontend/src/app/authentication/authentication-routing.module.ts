import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {LogoutPageComponent} from './pages/logout-page/logout-page.component';
import {AppPath} from "../common/enums/app-path.enum";
import {AuthPath} from "./logic/enums/auth-path.enum";

export const routes: Routes = [
  {
    path: AuthPath.LOGIN_PATH,
    component: LoginPageComponent
  },
  {
    path: AuthPath.LOGOUT_PATH,
    component: LogoutPageComponent
  },
  {
    path: AuthPath.REGISTER_PATH,
    component: RegisterPageComponent
  },
  {
    path: '**',
    redirectTo: AppPath.AUTH_LOGIN_PATH
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class AuthenticationRoutingModule {
}
