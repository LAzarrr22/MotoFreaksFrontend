import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SectionRolesComponent} from './section-roles.component';

describe('SectionRolesComponent', () => {
  let component: SectionRolesComponent;
  let fixture: ComponentFixture<SectionRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionRolesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
