import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SummaryFinishChallengeComponent} from './summary-finish-challenge.component';

describe('SummaryFinishChallengeComponent', () => {
  let component: SummaryFinishChallengeComponent;
  let fixture: ComponentFixture<SummaryFinishChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryFinishChallengeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryFinishChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
