import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-question-answer-item',
  templateUrl: './question-answer-item.component.html',
  styleUrls: ['./question-answer-item.component.scss']
})
export class QuestionAnswerItemComponent implements OnInit {
  @Input()
  answers: string[];
  @Input()
  correctAnswer: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  getNumberOfColumn() {
    console.log(12 / this.answers.length)
    return 12 / this.answers.length;
  }
}
