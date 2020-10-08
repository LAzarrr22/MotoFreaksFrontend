import {AfterViewInit, Component} from '@angular/core';
import {MyProfileModel} from "../../logic/dto/response/my-profile.model";
import {Router} from "@angular/router";
import {ProfileService} from "../../logic/services/profile.service";
import {AppPath} from "../../../../shared/enums/app-path.enum";

@Component({
  selector: 'app-top-bar-user-info',
  templateUrl: './top-bar-user-info.component.html',
  styleUrls: ['./top-bar-user-info.component.scss']
})
export class TopBarUserInfoComponent implements AfterViewInit {


  ngAfterViewInit(): void {
    setTimeout(() => {
      this.countUnReadMessages();
    }, 0)

  }

  profile: MyProfileModel;
  newMessages: number = 0;
  findAnyMessages: boolean = true;

  constructor(private router: Router, private profileService: ProfileService) {
    this.profileService.getMyProfile().subscribe(profile => this.profile = profile);
  }


  goToProfile() {
    this.router.navigate([AppPath.PROFILE_ME_PATH])
  }

  countUnReadMessages() {
    Object.keys(this.profile.messages).forEach(key => {
      this.profile.messages[key].forEach(message => {
          if (!message.read) {
            this.findAnyMessages = false;
            this.newMessages++;
          }
        }
      )
    });
  }

}
