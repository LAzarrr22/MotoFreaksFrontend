import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRoute} from "./common/enums/app-route.enum";
import {AuthGuard} from "./authentication/logic/guards/auth-guard.service";
import {AppPath} from "./common/enums/app-path.enum";


const routes: Routes = [
  {
    path: AppRoute.AUTH,
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: AppRoute.HOME,
    canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: '**',
    redirectTo: AppPath.HOME_PATH
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
