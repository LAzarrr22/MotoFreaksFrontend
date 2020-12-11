import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuestionItemComponent} from './question-item.component';
import {QuestionAnswer} from "../../logic/dto/response/question-answer.model";

describe('QuestionItemComponent', () => {
  let component: QuestionItemComponent;
  let fixture: ComponentFixture<QuestionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionItemComponent);
    component = fixture.componentInstance;
    component.question=new QuestionAnswer('question',55,['ans1'],'ans1')
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
