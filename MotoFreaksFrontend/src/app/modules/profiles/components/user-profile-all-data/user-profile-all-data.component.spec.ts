import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserProfileAllDataComponent} from './user-profile-all-data.component';

describe('UserProfileAllDataComponent', () => {
  let component: UserProfileAllDataComponent;
  let fixture: ComponentFixture<UserProfileAllDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfileAllDataComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileAllDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
