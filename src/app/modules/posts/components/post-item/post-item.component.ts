import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostModel} from "../../logic/dto/model/post.model";
import {Router} from "@angular/router";
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {UsersService} from "../../../users/logic/services/users.service";
import {PostState} from "../../logic/enums/post-state.enum";

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
  @Input()
  isAdmin:boolean=false;
  @Output()
  deletePostEvent = new EventEmitter<string>();
  @Output()
  resolvePostEvent = new EventEmitter<string>();
  @Output()
  refreshPostsEvent = new EventEmitter();
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

  resolvePost() {
    this.resolvePostEvent.emit(this.post.id);
  }

  isOpen() {
    return this.post.state==PostState.OPEN;
  }
  refreshPosts(){
    this.refreshPostsEvent.emit()
  }
}
