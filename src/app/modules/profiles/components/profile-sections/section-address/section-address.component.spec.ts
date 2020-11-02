import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SectionAddressComponent} from './section-address.component';

describe('SectionAddressComponent', () => {
  let component: SectionAddressComponent;
  let fixture: ComponentFixture<SectionAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionAddressComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
