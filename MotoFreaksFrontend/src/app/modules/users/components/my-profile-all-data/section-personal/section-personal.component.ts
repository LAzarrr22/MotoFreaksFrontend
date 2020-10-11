import {Component, Input, OnInit} from '@angular/core';
import {MyProfileModel} from "../../../logic/dto/response/my-profile.model";
import {MergeUserModel} from "../../../logic/dto/request/merge-user.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ChangeStatusDiaglogComponent} from "../change-status-diaglog/change-status-diaglog.component";

@Component({
  selector: 'app-section-personal',
  templateUrl: './section-personal.component.html',
  styleUrls: ['./section-personal.component.scss']
})
export class SectionPersonalComponent implements OnInit {
  @Input()
  profile: MyProfileModel;

  merge: MergeUserModel;
  isEditable: boolean = false;

  formMerge: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.formMerge = this.formBuilder.group({
      name: new FormControl(this.profile.name, [Validators.required]),
      lastName: new FormControl(this.profile.lastName, [Validators.required]),
      enabled: new FormControl(this.profile.enabled, [Validators.required]),
    });
  }

  changeUserState() {
    const dialogRef = this.dialog.open(ChangeStatusDiaglogComponent, {
      width: '450px',
      data: this.profile.enabled
    });
    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');
    });
  }

  mergeUser() {
    this.editPersonalData();
  }

  editPersonalData() {
    this.isEditable = !this.isEditable;
  }
}
