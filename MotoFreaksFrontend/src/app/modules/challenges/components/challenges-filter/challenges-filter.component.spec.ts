import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChallengesFilterComponent} from './challenges-filter.component';

describe('ChallengesFilterComponent', () => {
  let component: ChallengesFilterComponent;
  let fixture: ComponentFixture<ChallengesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengesFilterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
