import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {QuestionAnswer} from "../../logic/dto/response/question-answer.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NewChallengeModel} from "../../logic/dto/request/new-challenge.model";

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent implements OnInit {

  @Output()
  addQuestion=new EventEmitter<QuestionAnswer>()
  formQuestion: FormGroup;
  currentAnswers:string[]=[];
  correctAnswer:string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formQuestion = this.formBuilder.group({
      question: new FormControl('', [Validators.required]),
      points: new FormControl('', [Validators.required,Validators.maxLength(2), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]), //todo only number
      answer: new FormControl('' ),
      correct: new FormControl(false),
    })
  }

  addQuestionToChallenge(){
    console.dir(this.formQuestion)
if(this.formQuestion.valid && this.correctAnswer && this.currentAnswers.length>0)
    this.addQuestion.emit(new QuestionAnswer(this.getQuestion(), this.getPoints(),this.currentAnswers, this.correctAnswer))
  }

  addOtherAnswer(){
if(this.getAnswer()!=''){
  if(this.getCorrectAnswer()==true){
    this.correctAnswer=this.getAnswer();
    this.formQuestion.controls.correct.reset(false);
  }
  this.currentAnswers=[...this.currentAnswers,this.getAnswer()];
  this.formQuestion.controls.answer.reset('');
}
  }

  getQuestion(){
    return this.formQuestion.controls.question.value;
  }

  getPoints(){
    return this.formQuestion.controls.points.value;
  }

  getAnswer(){
    return this.formQuestion.controls.answer.value;
  }
 getCorrectAnswer(){
    return this.formQuestion.controls.correct.value;
  }

  deleteAnswer(answer: string) {
    if(this.correctAnswer==answer){
      this.correctAnswer=null;
    }
    const index: number = this.currentAnswers.indexOf(answer);
    if (index !== -1) {
      this.currentAnswers.splice(index, 1);
    }
  }
}
