import {Component, Input, OnInit} from '@angular/core';
import {MyProfileModel} from "../../../logic/dto/response/my-profile.model";

@Component({
  selector: 'app-section-personal',
  templateUrl: './section-personal.component.html',
  styleUrls: ['./section-personal.component.scss']
})
export class SectionPersonalComponent implements OnInit {
  @Input()
  profile: MyProfileModel;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeUserState() {

  }
}
