import {Component, Input, OnInit} from '@angular/core';
import {QuestionAnswer} from "../../logic/dto/response/question-answer.model";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  @Input()
  questionsList: QuestionAnswer[]
  obtainedPoints: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeObtainedPoints(points: number) {
    this.obtainedPoints += points;
  }

  endFill() {

  }
}
