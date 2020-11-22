import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChallengeDtoModel} from "../../logic/dto/response/challenge-dto.model";
import {UsersService} from "../../../users/logic/services/users.service";
import {$e} from "codelyzer/angular/styles/chars";

@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.scss']
})
export class ChallengesListComponent implements OnInit {

  @Input()
  challengesList: ChallengeDtoModel[];
  @Input()
  isAdmin: boolean;
  @Input()
  isModerator: boolean;
  @Input()
  myId: string;
  @Output()
  deleteEvent=new EventEmitter<string>();
  @Output()
  mergeEvent=new EventEmitter<string>();


  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
  }

  getCreatorName(id: string) {
    return this.usersService.getName(id);
  }

  getCreatorLastName(id: string) {
    return this.usersService.getLastName(id);
  }

  deleteChallenge($event: string) {
    this.deleteEvent.emit($event)
  }

  mergeChallenge($event: string) {
    this.mergeEvent.emit($event)
  }
}
