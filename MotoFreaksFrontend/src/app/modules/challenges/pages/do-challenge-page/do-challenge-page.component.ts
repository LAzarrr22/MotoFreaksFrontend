import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {QuestionAnswer} from "../../logic/dto/response/question-answer.model";
import {ChallengesService} from "../../logic/services/challenges.service";

@Component({
  selector: 'app-do-challenge-page',
  templateUrl: './do-challenge-page.component.html',
  styleUrls: ['./do-challenge-page.component.scss']
})
export class DoChallengePageComponent implements OnInit {

  questions: Observable<QuestionAnswer[]>;

  constructor(private route: ActivatedRoute, private challengesService: ChallengesService) {
  }

  ngOnInit(): void {
    const challengeId = this.route.snapshot.paramMap.get('id');
    this.questions = this.challengesService.getQuestions(challengeId);
    window.scrollTo(0, 0)
  }

}
