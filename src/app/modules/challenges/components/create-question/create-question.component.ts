import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QuestionAnswer} from "../../logic/dto/response/question-answer.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationMessageMap} from "../../../../shared/interfaces/validation-message-map";

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit {

  @Output()
  addQuestion = new EventEmitter<QuestionAnswer>()
  @Output()
  mergeQuestionEvent = new EventEmitter<QuestionAnswer>()
  formQuestion: FormGroup;
  currentAnswers: string[] = [];
  correctAnswer: string;
  validationMessages: ValidationMessageMap;
  isAnswersAdded: boolean;
  isCorrectAnswerSelect: boolean;
  @Input()
  isMerge: boolean = false;
  @Input()
  mergeQuestion: QuestionAnswer = null;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.formQuestion = this.formBuilder.group({
      question: new FormControl(this.isMerge ? this.mergeQuestion.question : '', [Validators.required]),
      points: new FormControl(this.isMerge ? this.mergeQuestion.points : '', [Validators.required, Validators.maxLength(2), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      answer: new FormControl(''),
      correct: new FormControl(false),
    })
    if (this.isMerge) {
      this.currentAnswers = this.mergeQuestion.answers;
      this.correctAnswer = this.mergeQuestion.correctAnswer;
      this.validationAnswers();
    }
    this.validationMessages = {
      points: {
        pattern: 'Points must contain only number',
        maxlength: 'Points must be in the 0-99 range'
      }
    }
  }

  addQuestionToChallenge() {
    this.validationAnswers();
    if (this.formQuestion.valid && this.correctAnswer && this.currentAnswers.length > 1)
      this.addQuestion.emit(new QuestionAnswer(this.getQuestion(), this.getPoints(), this.currentAnswers, this.correctAnswer))
  }

  mergeQuestionToChallenge() {
    this.validationAnswers();
    if (this.formQuestion.valid && this.correctAnswer && this.currentAnswers.length > 1)
      this.mergeQuestionEvent.emit(new QuestionAnswer(this.getQuestion(), this.getPoints(), this.currentAnswers, this.correctAnswer))
  }

  addOtherAnswer() {
    if (this.getAnswer() != '') {
      if (this.getCorrectAnswer() == true) {
        this.correctAnswer = this.getAnswer();
        this.formQuestion.controls.correct.reset(false);
      }
      this.currentAnswers = [...this.currentAnswers, this.getAnswer()];
      this.formQuestion.controls.answer.reset('');
    }
    this.validationAnswers();
  }

  validationAnswers() {
    this.isAnswersAdded = this.currentAnswers.length > 1
    this.isCorrectAnswerSelect = !!this.correctAnswer;

  }

  getQuestion() {
    return this.formQuestion.controls.question.value;
  }

  getPoints() {
    return this.formQuestion.controls.points.value;
  }

  getAnswer() {
    return this.formQuestion.controls.answer.value;
  }

  getCorrectAnswer() {
    return this.formQuestion.controls.correct.value;
  }

  deleteAnswer(answer: string) {
    if (this.correctAnswer == answer) {
      this.correctAnswer = null;
    }
    const index: number = this.currentAnswers.indexOf(answer);
    if (index !== -1) {
      this.currentAnswers.splice(index, 1);
    }
    this.validationAnswers();

  }
}
