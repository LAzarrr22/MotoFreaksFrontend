import {NgModule} from "@angular/core";
import {ErrorFormComponent} from "./error-form/error-form.component";
import {CommonModule} from "@angular/common";
import {ConnectionRefusedComponent} from './connection-refused/connection-refused.component';
import {CommonComponentsService} from "./common.service";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [ErrorFormComponent, ConnectionRefusedComponent],
  imports: [
    CommonModule,
    MatButtonModule
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
