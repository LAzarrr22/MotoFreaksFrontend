import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DataShowEditComponent} from './data-show-edit.component';

describe('DataShowEditComponent', () => {
  let component: DataShowEditComponent;
  let fixture: ComponentFixture<DataShowEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DataShowEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataShowEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
