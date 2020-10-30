import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-summary-finish-challenge',
  templateUrl: './summary-finish-challenge.component.html',
  styleUrls: ['./summary-finish-challenge.component.scss']
})
export class SummaryFinishChallengeComponent implements OnInit {

  @Input()
  points: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
