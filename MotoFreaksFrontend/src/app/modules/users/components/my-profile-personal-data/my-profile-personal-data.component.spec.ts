import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MyProfilePersonalDataComponent} from './my-profile-personal-data.component';

describe('MyProfilePersonalDataComponent', () => {
  let component: MyProfilePersonalDataComponent;
  let fixture: ComponentFixture<MyProfilePersonalDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyProfilePersonalDataComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfilePersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
