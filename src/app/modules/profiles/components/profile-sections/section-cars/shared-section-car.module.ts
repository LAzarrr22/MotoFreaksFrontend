import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from "../../../../../shared/angular-material.module";
import {AddEditCarComponent} from "./add-edit-car/add-edit-car.component";
import {SectionCarsComponent} from "./section-cars.component";
import {CarItemComponent} from "./car-item/car-item.component";
import {AppCommonModule} from "../../../../common/common.module";

const components = [
  AddEditCarComponent, SectionCarsComponent, CarItemComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    AppCommonModule,
    AngularMaterialModule,
  ],
  exports: [
    ...components
  ]

})
export class SharedSectionCarModule {
}
