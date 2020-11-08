import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSentencePageComponent } from './all-sentence-page.component';

describe('AllSentencePageComponent', () => {
  let component: AllSentencePageComponent;
  let fixture: ComponentFixture<AllSentencePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSentencePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSentencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
