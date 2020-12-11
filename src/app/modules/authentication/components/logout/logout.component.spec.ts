import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LogoutComponent} from './logout.component';
import {RouterTestingModule} from "@angular/router/testing";
import {Actions} from "@ngrx/effects";
import {provideMockStore} from "@ngrx/store/testing";
import {isUserLoggedIn} from "../../logic/reducers/authentication.reducers";
import {of} from "rxjs";

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;
  const fakeActions = of({});

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogoutComponent],
      imports: [RouterTestingModule],
      providers: [{
        provide:Actions,
        useValue: fakeActions
      }, provideMockStore({ selectors: [{ selector: isUserLoggedIn, value: false }] })]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
