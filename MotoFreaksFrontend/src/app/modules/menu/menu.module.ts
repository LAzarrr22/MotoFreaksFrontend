import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuBarComponent} from './components/menu-bar/menu-bar.component';
import {MenuService} from "./logic/services/menu.service";
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {ProfileService} from "../profiles/logic/services/profile.service";
import {ProfileModule} from "../profiles/profile.module";
import {AngularMaterialModule} from "../../shared/angular-material.module";


@NgModule({
  declarations: [MenuBarComponent, TopBarComponent],
  exports: [
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ProfileModule,

  ],
  providers: [
    MenuService,
    ProfileService
  ]

})
export class MenuModule {
}
