import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FilterByCarComponent} from './filter-by-car.component';

describe('FilterByCarComponent', () => {
  let component: FilterByCarComponent;
  let fixture: ComponentFixture<FilterByCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilterByCarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
