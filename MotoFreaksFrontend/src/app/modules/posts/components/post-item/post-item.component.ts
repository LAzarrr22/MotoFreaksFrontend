import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostModel} from "../../logic/dto/model/post.model";
import {Router} from "@angular/router";
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {UserModel} from "../../../users/logic/dto/response/user-model";

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input()
  post: PostModel;
  @Input()
  users: UserModel[];
  @Input()
  myId: string;
  @Output()
  deletePostEvent = new EventEmitter<string>();
  authorName: string;
  authorLastName: string;


  constructor(private router: Router) {
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
    this.authorName = this.users.find(user => user.id === this.post.creatorId).name;
  }

  getReceiverLastName() {
    this.authorLastName = this.users.find(user => user.id === this.post.creatorId).lastName;
  }

  deletePost() {
    this.deletePostEvent.emit(this.post.id);
  }
}
