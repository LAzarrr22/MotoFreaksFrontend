import {AppRoute} from "../../shared/enums/app-route.enum";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ModifyCarsComponent} from "./pages/modify-cars/modify-cars.component";


export const routes: Routes = [
  {
    path: AppRoute.MODIFY,
    component:ModifyCarsComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
})
export class CarsRoutingModule {

}
