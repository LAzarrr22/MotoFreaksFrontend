import {Component, Input, OnInit} from '@angular/core';
import {MyProfileModel} from "../../../logic/dto/response/my-profile.model";
import {MergeUserModel} from "../../../logic/dto/request/merge-user.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationMessageMap} from "../../../../../shared/interfaces/validation-message-map";
import {ProfileService} from "../../../logic/services/profile.service";

@Component({
  selector: 'app-section-my-personal',
  templateUrl: './section-my-personal.component.html',
  styleUrls: ['./section-my-personal.component.scss']
})
export class SectionMyPersonalComponent implements OnInit {
  @Input()
  profile: MyProfileModel;

  merge: MergeUserModel;
  isEditable: boolean = false;
  isPasswordChange: boolean = false;

  formMerge: FormGroup;
  validationMessages: ValidationMessageMap;

  constructor(private formBuilder: FormBuilder, private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.formMerge = this.formBuilder.group({
      name: new FormControl(this.profile.name, [Validators.required]),
      lastName: new FormControl(this.profile.lastName, [Validators.required]),
      gender: new FormControl(this.profile.gender, [Validators.required]),
      enabled: new FormControl(this.profile.enabled),
      password: new FormControl('', [Validators.pattern(new RegExp('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)')), Validators.minLength(6)]),
      repeatPassword: new FormControl('')
    }, {validators: [this.passwordMatchValidator]});

    this.validationMessages = {
      repeatPassword: {
        missingAddress: 'Passwords not equals'
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
        group.controls['repeatPassword'].setErrors({missingAddress: true});
        return {missingAddress: true};
      } else {
        group.controls['repeatPassword'].setErrors(null);
      }
    }
    return null;
  }


  mergeUser() {
    if (this.formMerge.valid) {
      this.profileService.mergeProfile(
        new MergeUserModel(this.getNewName(), this.getNewLastName(), this.getNewGender(), this.getNewEnabled(), this.getNewPassword()))
      setTimeout(() => {
        this.profileService.getMyProfile();
      }, 500)
      this.editData();
    }
  }

  editData() {
    this.isEditable = !this.isEditable;
  }

  changePassword() {
    this.isPasswordChange = !this.isPasswordChange;
  }

  getNewName() {
    return this.formMerge.controls.name.value;
  }

  getNewLastName() {
    return this.formMerge.controls.lastName.value;
  }

  getNewGender() {
    return this.formMerge.controls.gender.value;
  }

  getNewEnabled() {
    return this.formMerge.controls.enabled.value;
  }

  getNewPassword() {
    return this.formMerge.controls.password.value;
  }

}
