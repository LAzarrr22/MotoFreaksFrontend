import {Component, Input, OnInit} from '@angular/core';
import {ChallengeDtoModel} from "../../logic/dto/response/challenge-dto.model";
import {Router} from "@angular/router";
import {AppPath} from "../../../../shared/enums/app-path.enum";

@Component({
  selector: 'app-challenges-list-item',
  templateUrl: './challenges-list-item.component.html',
  styleUrls: ['./challenges-list-item.component.scss']
})
export class ChallengesListItemComponent implements OnInit {

  @Input()
  challenge: ChallengeDtoModel;
  @Input()
  creatorName: string;
  @Input()
  creatorLastName: string;
  @Input()
  myId: string


  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToProfile() {
    if (this.myId === this.challenge.creatorId) {
      this.router.navigate([AppPath.PROFILE_ME_PATH])
    } else {
      this.router.navigate([AppPath.PROFILE_USER_PATH, {id: this.challenge.creatorId}])
    }
  }

  startChallenge() {
    this.router.navigate([AppPath.CHALLENGES_DO_PATH, {id: this.challenge.id}])
  }
}
