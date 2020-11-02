import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SectionMyPersonalComponent} from './section-my-personal.component';

describe('SectionPersonalComponent', () => {
  let component: SectionMyPersonalComponent;
  let fixture: ComponentFixture<SectionMyPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionMyPersonalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMyPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
