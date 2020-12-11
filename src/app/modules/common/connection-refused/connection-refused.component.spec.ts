import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ConnectionRefusedComponent} from './connection-refused.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";

describe('ConnectionRefusedComponent', () => {
  let component: ConnectionRefusedComponent;
  let fixture: ComponentFixture<ConnectionRefusedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectionRefusedComponent],
      imports:[RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionRefusedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
