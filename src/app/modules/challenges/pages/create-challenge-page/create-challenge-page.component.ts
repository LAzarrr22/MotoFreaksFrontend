import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ChallengesService} from "../../logic/services/challenges.service";
import {NewChallengeModel} from "../../logic/dto/request/new-challenge.model";
import {AppPath} from "../../../../shared/enums/app-path.enum";

@Component({
  selector: 'app-create-challenge-page',
  templateUrl: './create-challenge-page.component.html',
  styleUrls: ['./create-challenge-page.component.scss']
})
export class CreateChallengePageComponent implements OnInit {

  constructor(private router:Router, private challengesService: ChallengesService) {
  }

  ngOnInit(): void {
  }

  createNewChallenge(newChallenge: NewChallengeModel){
    this.challengesService.createChallenge(newChallenge);
    this.router.navigate([AppPath.CHALLENGES_ALL_PATH])
  }
}
