import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Actions} from "@ngrx/effects";
import {RouterTestingModule} from "@angular/router/testing";
import {of} from "rxjs";
import {provideMockStore} from "@ngrx/store/testing";
import {isUserLoggedIn} from "../../logic/reducers/authentication.reducers";
import {LoginComponent} from "./login.component";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const fakeActions = of({});

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [RouterTestingModule],
      providers: [{
        provide:Actions,
        useValue: fakeActions
      }, provideMockStore({ selectors: [{ selector: isUserLoggedIn, value: false }] })]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
