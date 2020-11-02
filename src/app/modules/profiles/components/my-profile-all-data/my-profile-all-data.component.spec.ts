import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyProfileAllDataComponent} from './my-profile-all-data.component';

describe('MyProfileAllDataComponent', () => {
  let component: MyProfileAllDataComponent;
  let fixture: ComponentFixture<MyProfileAllDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyProfileAllDataComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileAllDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
