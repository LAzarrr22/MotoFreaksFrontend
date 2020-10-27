import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AllChallengesPageComponent} from './all-challenges-page.component';

describe('AllChallengesPageComponent', () => {
  let component: AllChallengesPageComponent;
  let fixture: ComponentFixture<AllChallengesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllChallengesPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllChallengesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
