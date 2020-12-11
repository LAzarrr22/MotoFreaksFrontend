import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuestionsComponent} from './questions.component';
import {QuestionAnswer} from "../../logic/dto/response/question-answer.model";

describe('QuestionsComponent', () => {
  let component: QuestionsComponent;
  let fixture: ComponentFixture<QuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsComponent);
    component = fixture.componentInstance;
    component.questionsList=[new QuestionAnswer('question',55,['ans1'],'ans1')]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
