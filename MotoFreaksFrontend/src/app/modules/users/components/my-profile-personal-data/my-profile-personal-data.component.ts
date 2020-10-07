import {Component, Input, OnInit} from '@angular/core';
import {MyProfileModel} from "../../logic/dto/response/my-profile.model";

@Component({
  selector: 'app-my-profile-personal-data',
  templateUrl: './my-profile-personal-data.component.html',
  styleUrls: ['./my-profile-personal-data.component.scss']
})
export class MyProfilePersonalDataComponent implements OnInit {
  @Input()
  profile: MyProfileModel;
  @Input()
  isLoading: boolean;

  constructor() {
  }

  ngOnInit(): void {
    console.dir(this.profile)
    console.dir(this.profile.messages.values)
  }

}
