import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppPath} from "../../../../shared/enums/app-path.enum";

@Component({
  selector: 'app-summary-finish-challenge',
  templateUrl: './summary-finish-challenge.component.html',
  styleUrls: ['./summary-finish-challenge.component.scss']
})
export class SummaryFinishChallengeComponent implements OnInit {

  @Input()
  points: number;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToChallenges() {
    this.router.navigate([AppPath.CHALLENGES_ALL_PATH])
  }
}
