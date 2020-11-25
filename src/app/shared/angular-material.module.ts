import {NgModule} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatMenuModule} from "@angular/material/menu";
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

const matModules = [
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatDividerModule,
  MatIconModule,
  MatButtonModule,
  MatBadgeModule,
  MatCheckboxModule,
  ReactiveFormsModule,
  MatSelectModule,
  MatRadioModule,
  FormsModule,
  MatCardModule,
  MatTooltipModule,
  MatMenuModule,
  MatDialogModule,
  MatProgressSpinnerModule
];


@NgModule({
  declarations: [],
  imports: [
    ...matModules
  ],
  exports: [
    ...matModules
  ]

})
export class AngularMaterialModule {
}
