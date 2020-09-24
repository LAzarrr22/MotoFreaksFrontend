import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppPath} from "./common/enums/app-path.enum";


const routes: Routes = [
  {
    path: AppPath.AUTH_PATH,
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: AppPath.HOME_PATH,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
