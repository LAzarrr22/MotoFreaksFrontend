import {Component, OnInit} from '@angular/core';
import {ChallengesService} from "../../logic/services/challenges.service";

@Component({
  selector: 'app-all-challenges-page',
  templateUrl: './all-challenges-page.component.html',
  styleUrls: ['./all-challenges-page.component.scss']
})
export class AllChallengesPageComponent implements OnInit {

  constructor(private challengesService: ChallengesService) {
  }

  ngOnInit(): void {

    console.log('all challenges')
    let paramMap = new Map<string, string>();
    // paramMap.set('model','TT');
    // paramMap.set('generation', '8n');
    paramMap.set('company', 'MINI');

    this.challengesService.getAllChallengesByCar(paramMap).subscribe(ch => {

      console.dir(ch)


    })
  }

}
