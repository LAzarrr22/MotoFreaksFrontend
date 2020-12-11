import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SectionCarsComponent} from './section-cars.component';
import {Input} from "@angular/core";
import {CarModel} from "../../../logic/dto/models/car.model";

describe('SectionCarsComponent', () => {
  let component: SectionCarsComponent;
  let fixture: ComponentFixture<SectionCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionCarsComponent]
    })
      .compileComponents();
  }));

 beforeEach(() => {
    fixture = TestBed.createComponent(SectionCarsComponent);
    component = fixture.componentInstance;
    component.cars=[new CarModel('test',new Date,new Date,'test'
      ,'test','test','test','test',785,'test','test',111,111)]
    component.myProfile=true
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
