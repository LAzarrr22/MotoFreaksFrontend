import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarsApiService} from "./logic/service/cars-api.service";
import {CarsService} from "./logic/service/cars.service";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {CarsEffects} from "./logic/effects/cars.effects";
import {reducer} from "./logic/reducers/cars.reducer";
import { ModifyCarsComponent } from './pages/modify-cars/modify-cars.component';
import {CarsRoutingModule} from "./cars-routing.module";
import { ModifyCarsDataComponent } from './components/modify-cars-data/modify-cars-data.component';
import {AngularMaterialModule} from "../../shared/angular-material.module";


@NgModule({
  declarations: [ModifyCarsComponent, ModifyCarsDataComponent],
  imports: [
    CommonModule,
    CarsRoutingModule,
    StoreModule.forFeature('cars', reducer),
    EffectsModule.forFeature([CarsEffects]),
    AngularMaterialModule
  ],
  providers: [
    CarsApiService,
    CarsService
  ]
})
export class CarsModule {
}
