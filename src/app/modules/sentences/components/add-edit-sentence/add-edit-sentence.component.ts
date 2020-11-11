import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SentenceModel} from "../../logic/model/sentence.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NewSentenceModel} from "../../logic/model/new-sentence.model";

@Component({
  selector: 'app-add-edit-sentence',
  templateUrl: './add-edit-sentence.component.html',
  styleUrls: ['./add-edit-sentence.component.scss']
})
export class AddEditSentenceComponent implements OnInit {

  form: FormGroup

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddEditSentenceComponent>,
              @Inject(MAT_DIALOG_DATA) public data: SentenceModel) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(this.data ? this.data.name : '', [Validators.required]),
      translation: new FormControl(this.data ? this.data.translation : '', [Validators.required])
    });
  }

  getValidFrom() {
    const translationId=this.data ? this.data.id : null
    if (this.form.valid) {
      return new NewSentenceModel(translationId,this.getSentence(),this.getTranslation())
    }
  }

  getSentence(){
    return this.form.controls.name.value;
  }
  getTranslation(){
    return this.form.controls.translation.value;
  }

}
