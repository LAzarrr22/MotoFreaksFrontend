import {NgModule} from "@angular/core";
import {ErrorFormComponent} from "./error-form/error-form.component";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [ErrorFormComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorFormComponent
  ]
})

export class AppCommonModule {

}
