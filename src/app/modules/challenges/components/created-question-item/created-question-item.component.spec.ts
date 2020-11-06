import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedQuestionItemComponent } from './created-question-item.component';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
