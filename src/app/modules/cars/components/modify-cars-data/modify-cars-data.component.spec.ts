import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCarsDataComponent } from './modify-cars-data.component';

describe('ModifyCarsDataComponent', () => {
  let component: ModifyCarsDataComponent;
  let fixture: ComponentFixture<ModifyCarsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyCarsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyCarsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
