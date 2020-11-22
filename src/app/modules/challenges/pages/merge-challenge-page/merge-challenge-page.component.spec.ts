import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeChallengePageComponent } from './merge-challenge-page.component';

describe('MergeChallengePageComponent', () => {
  let component: MergeChallengePageComponent;
  let fixture: ComponentFixture<MergeChallengePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeChallengePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeChallengePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
