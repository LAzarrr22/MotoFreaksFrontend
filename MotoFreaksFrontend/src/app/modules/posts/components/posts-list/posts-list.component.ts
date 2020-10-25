import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostModel} from "../../logic/dto/model/post.model";
import {UserModel} from "../../../users/logic/dto/response/user-model";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  @Input()
  postsList: PostModel[];
  @Input()
  allUsers: UserModel[];
  @Input()
  myId: string;
  @Output()
  deletePostEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }


  deletePost(id: string) {
    this.deletePostEvent.emit(id);
  }

}
