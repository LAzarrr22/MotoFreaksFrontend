import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionAnswer} from "../../logic/dto/response/question-answer.model";

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss']
})
export class QuestionItemComponent implements OnInit {

  @Input()
  question: QuestionAnswer;
  @Output()
  changePoints = new EventEmitter<number>();
  isAlreadyCorrect: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  addPoints(answer: boolean) {
    if (answer && !this.isAlreadyCorrect) {
      this.isAlreadyCorrect = answer;
      this.changePoints.emit(this.question.points);
    } else if (!answer && this.isAlreadyCorrect) {
      this.changePoints.emit(-this.question.points);
      this.isAlreadyCorrect = false;
    }

  }
}
