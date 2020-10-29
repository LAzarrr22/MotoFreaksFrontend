import {Component, Input, OnInit} from '@angular/core';
import {ChallengeDtoModel} from "../../logic/dto/response/challenge-dto.model";
import {UsersService} from "../../../users/logic/services/users.service";

@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.scss']
})
export class ChallengesListComponent implements OnInit {

  @Input()
  challengesList: ChallengeDtoModel[];
  @Input()
  myId: string;


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

}
