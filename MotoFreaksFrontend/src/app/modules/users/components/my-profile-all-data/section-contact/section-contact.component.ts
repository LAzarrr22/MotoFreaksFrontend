import {Component, Input, OnInit} from '@angular/core';
import {ContactModel} from "../../../logic/dto/models/contact.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent implements OnInit {

  @Input()
  contact: ContactModel;
  isEditable: boolean = false;
  formMerge: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formMerge = this.formBuilder.group({
      email: new FormControl(this.contact.email, [Validators.required]),
      phone: new FormControl(this.contact.phone),
      skype: new FormControl(this.contact.skype),
      facebook: new FormControl(this.contact.facebook),
      instagram: new FormControl(this.contact.instagram),
      twitter: new FormControl(this.contact.twitter),
      youtube: new FormControl(this.contact.youtube),
    });
  }

  editData() {
    this.isEditable = !this.isEditable;
  }

  mergeContact() {
    if (this.formMerge.valid) {
      console.dir(this.formMerge)
    }
  }
}
