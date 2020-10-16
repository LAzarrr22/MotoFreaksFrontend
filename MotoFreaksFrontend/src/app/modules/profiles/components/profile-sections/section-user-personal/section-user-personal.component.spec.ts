import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SectionUserPersonalComponent} from './section-user-personal.component';

describe('SectionUserPersonalComponent', () => {
  let component: SectionUserPersonalComponent;
  let fixture: ComponentFixture<SectionUserPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionUserPersonalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionUserPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
