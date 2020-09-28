import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuBarComponent} from './components/menu-bar/menu-bar.component';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [MenuBarComponent],
  exports: [
    MenuBarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class MenuModule {
}
