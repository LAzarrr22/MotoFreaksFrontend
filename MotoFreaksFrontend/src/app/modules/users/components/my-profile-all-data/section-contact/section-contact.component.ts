import {Component, Input, OnInit} from '@angular/core';
import {ContactModel} from "../../../logic/dto/models/contact.model";

@Component({
  selector: 'app-section-contact',
  templateUrl: './section-contact.component.html',
  styleUrls: ['./section-contact.component.scss']
})
export class SectionContactComponent implements OnInit {

  @Input()
  contact: ContactModel;
  isEditable: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  editData() {
    this.isEditable = !this.isEditable;
  }
}
