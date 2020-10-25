import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from "../../logic/dto/model/post.model";
import {Router} from "@angular/router";
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {ProfileService} from "../../../profiles/logic/services/profile.service";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input()
  post: PostModel;
  @Input()
  authorName: string;
  @Input()
  authorLastName: string;

  constructor(private router: Router, private profileService: ProfileService) {
  }

  ngOnInit(): void {
  }

  goToProfile() {
    let myId = '';
    this.profileService.getMyProfile().subscribe(profile => myId = profile.id)
    if (myId === this.post.creatorId) {
      this.router.navigate([AppPath.PROFILE_ME_PATH])
    } else {
      this.router.navigate([AppPath.PROFILE_USER_PATH, {id: this.post.creatorId}])
    }
  }
}
