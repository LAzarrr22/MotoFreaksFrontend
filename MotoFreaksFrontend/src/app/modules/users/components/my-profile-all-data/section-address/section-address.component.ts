import {Component, Input, OnInit} from '@angular/core';
import {AddressModel} from "../../../logic/dto/models/address.model";

@Component({
  selector: 'app-section-address',
  templateUrl: './section-address.component.html',
  styleUrls: ['./section-address.component.scss']
})
export class SectionAddressComponent implements OnInit {
  @Input()
  address: AddressModel
  isEditable: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  editData() {
    this.isEditable = !this.isEditable;
  }
}
