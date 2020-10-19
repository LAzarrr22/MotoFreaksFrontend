import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ConvExpandedComponent} from './conv-expanded.component';

describe('ConvExpandedComponent', () => {
  let component: ConvExpandedComponent;
  let fixture: ComponentFixture<ConvExpandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConvExpandedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
