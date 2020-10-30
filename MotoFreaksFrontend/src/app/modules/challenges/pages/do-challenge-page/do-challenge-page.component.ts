import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {QuestionAnswer} from "../../logic/dto/response/question-answer.model";
import {ChallengesService} from "../../logic/services/challenges.service";
import {ProfileService} from "../../../profiles/logic/services/profile.service";

@Component({
  selector: 'app-do-challenge-page',
  templateUrl: './do-challenge-page.component.html',
  styleUrls: ['./do-challenge-page.component.scss']
})
export class DoChallengePageComponent implements OnInit {

  questions: Observable<QuestionAnswer[]>;
  challengeId: string;
  showSummary: boolean = false;

  constructor(private route: ActivatedRoute, private challengesService: ChallengesService,
              private router: Router, private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.challengeId = this.route.snapshot.paramMap.get('id');
    this.questions = this.challengesService.getQuestions(this.challengeId);
    window.scrollTo(0, 0)
  }

  finishChallenge(obtainedPoints: number) {
    this.showSummary = true;
    this.challengesService.addCompetitor(this.challengeId);
    this.profileService.addPoints(obtainedPoints);
  }

}
