import {Component, Input, OnInit} from '@angular/core';
import {MyProfileModel} from "../../logic/dto/response/my-profile.model";

@Component({
  selector: 'app-my-profile-all-data',
  templateUrl: './my-profile-all-data.component.html',
  styleUrls: ['./my-profile-all-data.component.scss']
})
export class MyProfileAllDataComponent implements OnInit {
  @Input()
  profile: MyProfileModel;
  @Input()
  isLoading: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
