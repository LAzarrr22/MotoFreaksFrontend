import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SectionCarsComponent} from './section-cars.component';

describe('SectionCarsComponent', () => {
  let component: SectionCarsComponent;
  let fixture: ComponentFixture<SectionCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionCarsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
