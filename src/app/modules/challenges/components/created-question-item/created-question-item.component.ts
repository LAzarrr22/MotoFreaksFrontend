import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionAnswer} from "../../logic/dto/response/question-answer.model";

@Component({
  selector: 'app-created-question-item',
  templateUrl: './created-question-item.component.html',
  styleUrls: ['./created-question-item.component.scss']
})
export class CreatedQuestionItemComponent implements OnInit {

  @Input()
  question: QuestionAnswer;
  @Output()
  deleteQuestionEvn = new EventEmitter();
  @Output()
  mergeQuestionEvn = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteQuestion() {
    this.deleteQuestionEvn.emit()
  }

  editQuestion() {
    this.mergeQuestionEvn.emit()
  }
}
