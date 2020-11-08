import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSentenceListComponent } from './all-sentence-list.component';

describe('AllSentenceListComponent', () => {
  let component: AllSentenceListComponent;
  let fixture: ComponentFixture<AllSentenceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSentenceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSentenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
