import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-change-status-diaglog',
  templateUrl: './change-status-diaglog.component.html',
  styleUrls: ['./change-status-diaglog.component.scss']
})
export class ChangeStatusDiaglogComponent {

  constructor(
    public dialogRef: MatDialogRef<ChangeStatusDiaglogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: boolean) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
