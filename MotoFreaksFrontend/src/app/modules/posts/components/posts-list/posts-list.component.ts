import {Component, Input, OnInit} from '@angular/core';
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

  constructor() {
  }

  ngOnInit(): void {
  }

  getReceiverName(id: string): string {
    return this.allUsers.find(user => user.id === id).name;
  }

  getReceiverLastName(id: string): string {
    return this.allUsers.find(user => user.id === id).lastName;
  }
}
