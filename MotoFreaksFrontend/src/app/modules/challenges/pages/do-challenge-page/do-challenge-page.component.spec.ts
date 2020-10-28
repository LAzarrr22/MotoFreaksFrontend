import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DoChallengePageComponent} from './do-challenge-page.component';

describe('DoChallengePageComponent', () => {
  let component: DoChallengePageComponent;
  let fixture: ComponentFixture<DoChallengePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoChallengePageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoChallengePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
