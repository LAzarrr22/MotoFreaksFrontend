import {Component, Input, OnInit} from '@angular/core';
import {ContactModel} from "../../../logic/dto/models/contact.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProfileService} from "../../../logic/services/profile.service";
import {ValidationMessageMap} from "../../../../../shared/interfaces/validation-message-map";

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent implements OnInit {

  @Input()
  contact: ContactModel;
  @Input()
  myProfile: boolean = false;
  isEditable: boolean = false;
  formMerge: FormGroup;
  validationMessages: ValidationMessageMap;

  constructor(private formBuilder: FormBuilder, private profileService: ProfileService) {
    this.validationMessages = {
      phone: {
        pattern: 'Password must contain only number',
      }
    }
  }

  ngOnInit(): void {
    this.formMerge = this.formBuilder.group({
      email: new FormControl(this.contact.email, [Validators.required, Validators.email]),
      phone: new FormControl(this.contact.phone, [Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
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
      this.profileService.mergeContact(
        new ContactModel(this.getNewEmail(), this.getNewPhone(), this.getNewFacebook(), this.getNewInstagram(), this.getNewTwitter(), this.getNewSkype(), this.getNewYoutube()))
      setTimeout(() => {
        this.profileService.getMyProfile()
      }, 500);
      this.editData();
    }
  }

  getNewEmail() {
    return this.formMerge.controls.email.value;
  }

  getNewPhone() {
    return this.formMerge.controls.phone.value;
  }

  getNewSkype() {
    return this.formMerge.controls.skype.value;
  }

  getNewFacebook() {
    return this.formMerge.controls.facebook.value;
  }

  getNewInstagram() {
    return this.formMerge.controls.instagram.value;
  }

  getNewTwitter() {
    return this.formMerge.controls.twitter.value;
  }

  getNewYoutube() {
    return this.formMerge.controls.youtube.value;
  }

}
