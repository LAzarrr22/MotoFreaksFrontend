import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {LogoutPageComponent} from './pages/logout-page/logout-page.component';

export const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'logout', component: LogoutPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class AuthenticationRoutingModule {
}
