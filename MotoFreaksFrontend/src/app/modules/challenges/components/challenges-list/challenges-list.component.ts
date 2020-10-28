import {Component, Input, OnInit} from '@angular/core';
import {ChallengeDtoModel} from "../../logic/dto/response/challenge-dto.model";

@Component({
  selector: 'app-challenges-list',
  templateUrl: './challenges-list.component.html',
  styleUrls: ['./challenges-list.component.scss']
})
export class ChallengesListComponent implements OnInit {

  @Input()
  challengesList: ChallengeDtoModel[];


  constructor() {
  }

  ngOnInit(): void {
  }


}
