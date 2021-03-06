import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostModel} from "../../logic/dto/model/post.model";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  @Input()
  postsList: PostModel[];
  @Input()
  myId: string;
  @Input()
  isAdmin: boolean;
  @Output()
  deletePostEvent = new EventEmitter<string>();
  @Output()
  resolvePostEvent = new EventEmitter<string>();
  @Output()
  refreshPostsEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }


  deletePost(id: string) {
    this.deletePostEvent.emit(id);
  }

  resolvePost(id: string) {
    this.resolvePostEvent.emit(id);
  }

  refreshPosts(){
    this.refreshPostsEvent.emit()
  }
}
