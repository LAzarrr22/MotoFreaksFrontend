import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MyProfileModel} from "../../logic/dto/response/my-profile.model";
import {Router} from "@angular/router";
import {ProfileService} from "../../logic/services/profile.service";
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {Subscription, timer} from "rxjs";
import {switchMap} from "rxjs/operators";
import {MessagesService} from "../../../messages/logic/services/messages.service";
import {AuthService} from "../../../authentication/logic/services/auth.service";

@Component({
  selector: 'app-top-bar-user-info',
  templateUrl: './top-bar-user-info.component.html',
  styleUrls: ['./top-bar-user-info.component.scss']
})
export class TopBarUserInfoComponent implements OnInit, OnDestroy {

  isValidated:boolean;
  profile: MyProfileModel;
  newMessages: number = 0;
  hiddenBadge: boolean = true;
  unreadSubscription: Subscription;

  constructor(private router: Router, private profileService: ProfileService,
              private messageService: MessagesService, private authService:AuthService) {
    this.authService.isValidatedUser().subscribe(validation=>this.isValidated=validation)
  }

  ngOnDestroy(): void {
    this.unreadSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.profileService.getMyProfile().subscribe(profile => this.profile = profile);
    this.getMessageCount();
  }

  goToProfile() {
    this.router.navigate([AppPath.PROFILE_ME_PATH])
  }

  getMessageCount() {
    this.unreadSubscription = timer(0, 10000).pipe(switchMap(() => this.messageService.getUnreadCount()))
      .subscribe(count => {
        if (count > 0) {
          this.newMessages = count
          this.hiddenBadge = false;
        } else if (count == 0) {
          this.hiddenBadge = true;
        }
      });
  }

  goToMessages() {
    this.router.navigate([AppPath.MESSAGE_ALL])
  }
}
