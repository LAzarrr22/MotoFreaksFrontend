import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FillSummaryPageComponent} from './fill-summary-page.component';

describe('FillSummaryPageComponent', () => {
  let component: FillSummaryPageComponent;
  let fixture: ComponentFixture<FillSummaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FillSummaryPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
