import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
  @Output()
  answersChange = new EventEmitter<boolean>();

  form: FormGroup;


  constructor(fb: FormBuilder) {
    this.form = fb.group({
      answer: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  add() {
    this.answersChange.emit(this.checkAnswer())
  }

  private checkAnswer() {
    return this.form.controls.answer.value === this.correctAnswer;
  }
}
