import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DoChallengePageComponent} from './do-challenge-page.component';
import {RouterModule} from "@angular/router";
import {ChallengesService} from "../../logic/services/challenges.service";
import {AuthService} from "../../../authentication/logic/services/auth.service";
import {Actions} from "@ngrx/effects";
import {provideMockStore} from "@ngrx/store/testing";
import {isLoading} from "../../logic/reducers/challenges.reducers";
import {of} from "rxjs";
import {ProfileService} from "../../../profiles/logic/services/profile.service";

describe('DoChallengePageComponent', () => {
  let component: DoChallengePageComponent;
  let fixture: ComponentFixture<DoChallengePageComponent>;
  const fakeActions = of({});

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoChallengePageComponent],
      imports:[RouterModule.forRoot([])],
      providers:[ChallengesService, ProfileService,
        {
          provide:Actions,
          useValue: fakeActions
        }, provideMockStore({ selectors: [{ selector: isLoading, value: false }] })]
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
