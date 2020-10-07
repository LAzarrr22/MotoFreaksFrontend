import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TopBarUserInfoComponent} from './top-bar-user-info.component';

describe('TopBarUserInfoComponent', () => {
  let component: TopBarUserInfoComponent;
  let fixture: ComponentFixture<TopBarUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopBarUserInfoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
