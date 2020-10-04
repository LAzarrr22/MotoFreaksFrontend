import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuBarComponent} from './components/menu-bar/menu-bar.component';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MenuService} from "./logic/services/menu.service";
import {TopBarComponent} from './components/top-bar/top-bar.component';


@NgModule({
  declarations: [MenuBarComponent, TopBarComponent],
  exports: [
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule
  ],
  providers: [
    MenuService
  ]

})
export class MenuModule {
}
