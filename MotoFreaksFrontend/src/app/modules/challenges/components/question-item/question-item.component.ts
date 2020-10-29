import {Component, Input, OnInit} from '@angular/core';
import {QuestionAnswer} from "../../logic/dto/response/question-answer.model";

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss']
})
export class QuestionItemComponent implements OnInit {

  @Input()
  question: QuestionAnswer;

  constructor() {
  }

  ngOnInit(): void {
  }

}
