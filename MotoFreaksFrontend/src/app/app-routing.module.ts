import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppRoute} from "./shared/enums/app-route.enum";
import {AuthGuard} from "./modules/authentication/logic/guards/auth-guard.service";
import {AppPath} from "./shared/enums/app-path.enum";


const routes: Routes = [
  {
    path: AppRoute.AUTH,
    loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: AppRoute.HOME,
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
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
