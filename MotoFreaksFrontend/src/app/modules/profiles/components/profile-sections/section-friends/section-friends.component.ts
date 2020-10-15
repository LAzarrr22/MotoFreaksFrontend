import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-friends',
  templateUrl: './section-friends.component.html',
  styleUrls: ['./section-friends.component.scss']
})
export class SectionFriendsComponent implements OnInit {
  @Input()
  friendsListId: string[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
