import {Component, Input, OnInit} from '@angular/core';
import {AddressModel} from "../../../logic/dto/models/address.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-section-address',
  templateUrl: './section-address.component.html',
  styleUrls: ['./section-address.component.scss']
})
export class SectionAddressComponent implements OnInit {
  @Input()
  address: AddressModel
  isEditable: boolean = false;
  formMerge: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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
      console.dir(this.formMerge)
    }
  }
}
