import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ConvListComponent} from './conv-list.component';

describe('ConvListComponent', () => {
  let component: ConvListComponent;
  let fixture: ComponentFixture<ConvListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConvListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
