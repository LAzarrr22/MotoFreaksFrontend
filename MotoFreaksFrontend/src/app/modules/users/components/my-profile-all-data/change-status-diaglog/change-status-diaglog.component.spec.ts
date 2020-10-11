import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChangeStatusDiaglogComponent} from './change-status-diaglog.component';

describe('ChangeStatusDiaglogComponent', () => {
  let component: ChangeStatusDiaglogComponent;
  let fixture: ComponentFixture<ChangeStatusDiaglogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeStatusDiaglogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeStatusDiaglogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
