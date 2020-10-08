import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SectionPersonalComponent} from './section-personal.component';

describe('SectionPersonalComponent', () => {
  let component: SectionPersonalComponent;
  let fixture: ComponentFixture<SectionPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionPersonalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
