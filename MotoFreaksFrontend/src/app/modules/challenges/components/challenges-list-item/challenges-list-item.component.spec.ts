import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChallengesListItemComponent} from './challenges-list-item.component';

describe('ChallengesListItemComponent', () => {
  let component: ChallengesListItemComponent;
  let fixture: ComponentFixture<ChallengesListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChallengesListItemComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
