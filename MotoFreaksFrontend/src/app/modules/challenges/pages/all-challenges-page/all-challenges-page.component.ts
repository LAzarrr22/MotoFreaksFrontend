import {Component, OnInit} from '@angular/core';
import {ChallengesApiService} from "../../logic/services/challenges-api.service";

@Component({
  selector: 'app-all-challenges-page',
  templateUrl: './all-challenges-page.component.html',
  styleUrls: ['./all-challenges-page.component.scss']
})
export class AllChallengesPageComponent implements OnInit {

  constructor(private challengesApiService: ChallengesApiService) {
  }

  ngOnInit(): void {
    console.log('all challenges')
    let paramMap = new Map<string, string>();
    // paramMap.set('model','TT');
    paramMap.set('generation', '8n');
    paramMap.set('company', 'Audi');

    this.challengesApiService.getAllChallengesByCarApi(paramMap).subscribe(ch => {
      ch.forEach(challenge => {
        console.dir(challenge)
        console.dir(challenge.qaList)
        challenge.qaList.forEach(qaList => {
          console.dir(qaList.correctAnswer)

          qaList.answers.forEach(ans => {
            console.dir(ans)
          })
        })
      })

    })
  }

}
