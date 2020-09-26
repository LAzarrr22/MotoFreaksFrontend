import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {LogoutPageComponent} from './pages/logout-page/logout-page.component';
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

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class AuthenticationRoutingModule {
}
