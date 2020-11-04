import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {HomeRoutingModule} from "./home-routing.module";
import { NotValidateDialogComponent } from './components/not-validate-dialog/not-validate-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [HomePageComponent, NotValidateDialogComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule {
}
