import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSentenceComponent } from './add-edit-sentence.component';

describe('AddEditSentenceComponent', () => {
  let component: AddEditSentenceComponent;
  let fixture: ComponentFixture<AddEditSentenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditSentenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
