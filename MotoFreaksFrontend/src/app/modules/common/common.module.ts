import {NgModule} from "@angular/core";
import {ErrorFormComponent} from "./error-form/error-form.component";
import {CommonModule} from "@angular/common";
import {ConnectionRefusedComponent} from './connection-refused/connection-refused.component';
import {CommonComponentsService} from "./common.service";
import {AngularMaterialModule} from "../../shared/angular-material.module";
import {FilterByCarComponent} from './filter-by-car/filter-by-car.component';


@NgModule({
  declarations: [ErrorFormComponent, ConnectionRefusedComponent, FilterByCarComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    ErrorFormComponent,
    FilterByCarComponent
  ],
  providers: [
    CommonComponentsService
  ]
})

export class AppCommonModule {

}
