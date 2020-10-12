import {Component, Input, OnInit} from '@angular/core';
import {MyProfileModel} from "../../../logic/dto/response/my-profile.model";
import {MergeUserModel} from "../../../logic/dto/request/merge-user.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationMessageMap} from "../../../../../shared/interfaces/validation-message-map";

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
  isPasswordChange: boolean = false;

  formMerge: FormGroup;
  validationMessages: ValidationMessageMap;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formMerge = this.formBuilder.group({
      name: new FormControl(this.profile.name, [Validators.required]),
      lastName: new FormControl(this.profile.lastName, [Validators.required]),
      enabled: new FormControl(this.profile.enabled),
      password: new FormControl('', [Validators.pattern(new RegExp('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)')), Validators.minLength(6)]),
      repeatPassword: new FormControl('')
    }, {validators: [this.passwordMatchValidator]});

    this.validationMessages = {
      repeatPassword: {
        notMatchingPassword: 'Passwords not equals'
      },
      password: {
        pattern: '<p>Password must contain: </p>' +
          '<ul>' +
          '<li>Have at least one uppercase</li>' +
          '<li>Have at least one lowercase</li>' +
          '<li>Have at least one number</li>' +
          '<li>Have at least one symbol</li>' +
          '</ul>',
        minlength: 'Password must be at least 6 characters long'
      }
    }
  }

  passwordMatchValidator(group: FormGroup): any {
    if (group) {
      if (group.get('password').value !== group.get('repeatPassword').value) {
        group.controls['repeatPassword'].setErrors({notMatchingPassword: true});
        return {notMatchingPassword: true};
      } else {
        group.controls['repeatPassword'].setErrors(null);
      }
    }
    return null;
  }


  mergeUser() {
    console.log("TEST")
    if (this.formMerge.valid) {
      console.dir(this.formMerge)
    }
  }

  editData() {
    this.isEditable = !this.isEditable;
  }

  changePassword() {
    this.isPasswordChange = !this.isPasswordChange;
  }
}
