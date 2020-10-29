import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostModel} from "../../logic/dto/model/post.model";
import {Router} from "@angular/router";
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {UsersService} from "../../../users/logic/services/users.service";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input()
  post: PostModel;
  @Input()
  myId: string;
  @Output()
  deletePostEvent = new EventEmitter<string>();
  authorName: string;
  authorLastName: string;


  constructor(private router: Router, private userService: UsersService) {
  }

  ngOnInit(): void {
    this.getReceiverName();
    this.getReceiverLastName();
  }

  goToProfile() {
    if (this.myId === this.post.creatorId) {
      this.router.navigate([AppPath.PROFILE_ME_PATH])
    } else {
      this.router.navigate([AppPath.PROFILE_USER_PATH, {id: this.post.creatorId}])
    }
  }

  getReceiverName() {
    this.authorName = this.userService.getName(this.post.creatorId);
  }

  getReceiverLastName() {
    this.authorLastName = this.userService.getLastName(this.post.creatorId);
  }

  deletePost() {
    this.deletePostEvent.emit(this.post.id);
  }
}
