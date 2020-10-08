import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SectionFriendsComponent} from './section-friends.component';

describe('SectionFriendsComponent', () => {
  let component: SectionFriendsComponent;
  let fixture: ComponentFixture<SectionFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionFriendsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
