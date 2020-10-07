import {Component, OnInit} from '@angular/core';
import {MyProfileModel} from "../../logic/dto/response/my-profile.model";
import {Router} from "@angular/router";
import {ProfileService} from "../../logic/services/profile.service";
import {AppPath} from "../../../../shared/enums/app-path.enum";

@Component({
  selector: 'app-top-bar-user-info',
  templateUrl: './top-bar-user-info.component.html',
  styleUrls: ['./top-bar-user-info.component.scss']
})
export class TopBarUserInfoComponent implements OnInit {

  profile: MyProfileModel;
  newMessages: number;

  constructor(private router: Router, private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.profileService.getMyProfile().subscribe(profile => this.profile = profile);
    this.countUnReadMessages();

  }

  goToProfile() {
    this.router.navigate([AppPath.PROFILE_ME_PATH])
  }

  countUnReadMessages() {
    console.dir(this.profile)
    console.dir(this.profile.messages.values)
  }

}
