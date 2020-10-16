import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../../../users/logic/dto/response/user-model";

@Component({
  selector: 'app-section-user-personal',
  templateUrl: './section-user-personal.component.html',
  styleUrls: ['./section-user-personal.component.scss']
})
export class SectionUserPersonalComponent implements OnInit {

  @Input()
  user: UserModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
