import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {LogoutPageComponent} from './pages/logout-page/logout-page.component';
import {AppPath} from "../common/enums/app-path.enum";
import {AppRoute} from "../common/enums/app-route.enum";

export const routes: Routes = [
  {
    path: AppRoute.LOGIN,
    component: LoginPageComponent
  },
  {
    path: AppRoute.LOGOUT,
    component: LogoutPageComponent
  },
  {
    path: AppRoute.REGISTER,
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
