import {NgModule} from "@angular/core";
import {ErrorFormComponent} from "./error-form/error-form.component";
import {CommonModule} from "@angular/common";
import {ConnectionRefusedComponent} from './connection-refused/connection-refused.component';
import {CommonComponentsService} from "./common.service";
import {AngularMaterialModule} from "../../shared/angular-material.module";


@NgModule({
  declarations: [ErrorFormComponent, ConnectionRefusedComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    ErrorFormComponent
  ],
  providers: [
    CommonComponentsService
  ]
})

export class AppCommonModule {

}
