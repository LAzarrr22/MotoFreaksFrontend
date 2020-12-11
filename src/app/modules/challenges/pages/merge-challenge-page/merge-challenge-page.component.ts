import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ChallengesService} from "../../logic/services/challenges.service";
import {NewChallengeModel} from "../../logic/dto/request/new-challenge.model";
import {ChallengeDtoModel} from "../../logic/dto/response/challenge-dto.model";
import {QuestionAnswer} from "../../logic/dto/response/question-answer.model";
import {AppPath} from "../../../../shared/enums/app-path.enum";

@Component({
  selector: 'app-merge-challenge-page',
  templateUrl: './merge-challenge-page.component.html',
  styleUrls: ['./merge-challenge-page.component.scss']
})
export class MergeChallengePageComponent implements OnInit {

  challenges:ChallengeDtoModel[];
  mergeChallengeId:string;
  challengeToMerge:ChallengeDtoModel;
  questionsToMerge: QuestionAnswer[];


  constructor(private route: ActivatedRoute, private router:Router, private challengesService: ChallengesService) { }

  ngOnInit(): void {
    this.mergeChallengeId = this.route.snapshot.paramMap.get('id');
    this.challengesService.getAllChallenges().subscribe(challenges=>this.challenges=challenges)
    this.challengeToMerge=this.challenges.find((challenge:ChallengeDtoModel)=>challenge.id===this.mergeChallengeId)
    this.challengesService.getQuestions(this.mergeChallengeId).subscribe(questions=>this.questionsToMerge=questions);
    window.scroll(0,0);
  }

  mergeChallenge($event: NewChallengeModel) {
    this.challengesService.mergeChallenge(this.mergeChallengeId,$event);
    this.router.navigate([AppPath.CHALLENGES_ALL_PATH])
  }
}
