import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateChallengePageComponent} from './create-challenge-page.component';
import {RouterTestingModule} from "@angular/router/testing";
import {RouterModule} from "@angular/router";
import {ChallengesService} from "../../logic/services/challenges.service";
import {Actions} from "@ngrx/effects";
import {provideMockStore} from "@ngrx/store/testing";
import {isLoading} from "../../logic/reducers/challenges.reducers";
import {of} from "rxjs";

describe('CreateChallengePageComponent', () => {
  let component: CreateChallengePageComponent;
  let fixture: ComponentFixture<CreateChallengePageComponent>;
  const fakeActions = of({});

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateChallengePageComponent],
      imports:[RouterTestingModule, RouterModule.forRoot([])],
      providers:[ChallengesService,
        {
          provide:Actions,
          useValue: fakeActions
        }, provideMockStore({ selectors: [{ selector: isLoading, value: false }] })]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChallengePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
