import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NewSentenceModel} from "../../../sentences/logic/model/new-sentence.model";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {SentenceModel} from "../../../sentences/logic/model/sentence.model";
import {ValidationMessageMap} from "../../../../shared/interfaces/validation-message-map";

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent implements OnInit {
  form: FormGroup;
  validationMessages: ValidationMessageMap;

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: string) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      currentName: new FormControl(this.data.valueOf()),
    }, {validators: [this.nameMatchValidator]});


    this.validationMessages = {
      name: {
        notMatchingName: 'Name not equals'
      }
    }
  }

  nameMatchValidator(group: FormGroup): any {
    if (group) {
      if (group.get('name').value !== group.get('currentName').value) {
        group.controls['name'].setErrors({notMatchingName: true});
        return {notMatchingName: true};
      } else {
        group.controls['name'].setErrors(null);
      }
    }
    return null;
  }


  getValidFrom() {
    if (this.form.valid) {
      return this.form.controls.name.value;
    }
  }
}
