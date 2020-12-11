import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedQuestionItemComponent } from './created-question-item.component';
import {QuestionAnswer} from "../../logic/dto/response/question-answer.model";

describe('CreatedQuestionItemComponent', () => {
  let component: CreatedQuestionItemComponent;
  let fixture: ComponentFixture<CreatedQuestionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedQuestionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedQuestionItemComponent);
    component = fixture.componentInstance;
    component.question=new QuestionAnswer('question',55,['ans1'],'ans1')
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
