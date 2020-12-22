import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {PostModel} from "../../../posts/logic/dto/model/post.model";

@Component({
  selector: 'app-last-post',
  templateUrl: './last-post.component.html',
  styleUrls: ['./last-post.component.scss']
})
export class LastPostComponent implements OnInit {

  @Input()
  postsList: PostModel[]


  constructor() { }

  ngOnInit(): void {
  }

}
