import {Component, Input, OnInit} from '@angular/core';
import {MyProfileModel} from "../../../logic/dto/response/my-profile.model";
import {MergeUserModel} from "../../../logic/dto/request/merge-user.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formMerge = this.formBuilder.group({
      name: new FormControl(this.profile.name, [Validators.required]),
      lastName: new FormControl(this.profile.lastName, [Validators.required]),
      enabled: new FormControl(this.profile.enabled),
    });
  }



  mergeUser() {
    console.dir(this.formMerge)
  }

  editPersonalData() {
    this.isEditable = !this.isEditable;
  }
}
