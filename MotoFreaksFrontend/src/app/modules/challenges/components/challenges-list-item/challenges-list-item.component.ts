import {Component, Input, OnInit} from '@angular/core';
import {ChallengeDtoModel} from "../../logic/dto/response/challenge-dto.model";

@Component({
  selector: 'app-challenges-list-item',
  templateUrl: './challenges-list-item.component.html',
  styleUrls: ['./challenges-list-item.component.scss']
})
export class ChallengesListItemComponent implements OnInit {

  @Input()
  challenge: ChallengeDtoModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
