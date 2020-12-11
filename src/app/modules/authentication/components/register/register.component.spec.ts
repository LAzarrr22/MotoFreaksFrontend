import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RegisterComponent} from './register.component';
import {RouterTestingModule} from "@angular/router/testing";
import {Actions} from "@ngrx/effects";
import {provideMockStore} from "@ngrx/store/testing";
import {isUserLoggedIn} from "../../logic/reducers/authentication.reducers";
import {of} from "rxjs";
import {ReactiveFormsModule} from "@angular/forms";

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  const fakeActions = of({});

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [RouterTestingModule, ReactiveFormsModule],
      providers: [{
        provide:Actions,
        useValue: fakeActions
      }, provideMockStore({ selectors: [{ selector: isUserLoggedIn, value: false }] })]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
