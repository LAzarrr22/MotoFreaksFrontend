import {Component, Input, OnInit} from '@angular/core';
import {AddressModel} from "../../../logic/dto/models/address.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProfileService} from "../../../logic/services/profile.service";

@Component({
  selector: 'app-section-address',
  templateUrl: './section-address.component.html',
  styleUrls: ['./section-address.component.scss']
})
export class SectionAddressComponent implements OnInit {
  @Input()
  address: AddressModel
  @Input()
  myProfile: boolean = false;

  isEditable: boolean = false;
  formMerge: FormGroup;

  constructor(private formBuilder: FormBuilder, private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.formMerge = this.formBuilder.group({
      country: new FormControl(this.address.country, [Validators.required]),
      state: new FormControl(this.address.state, [Validators.required]),
      city: new FormControl(this.address.city, [Validators.required]),
      street: new FormControl(this.address.street),
    });
  }

  editData() {
    this.isEditable = !this.isEditable;
  }

  mergeAddress() {
    if (this.formMerge.valid) {
      this.profileService.mergeAddress(
        new AddressModel(this.getNewCountry(), this.getNewState(), this.getNewCity(), this.getNewStreet()))
      setTimeout(() => {
        this.profileService.getMyProfile()
      }, 0);
      this.editData();
    }
  }

  getNewCountry() {
    return this.formMerge.controls.country.value;
  }

  getNewState() {
    return this.formMerge.controls.state.value;
  }

  getNewCity() {
    return this.formMerge.controls.city.value;
  }

  getNewStreet() {
    return this.formMerge.controls.street.value;
  }

}
