import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SectionContactComponent} from './section-contact.component';
import {Input} from "@angular/core";
import {ContactModel} from "../../../logic/dto/models/contact.model";
import {ReactiveFormsModule} from "@angular/forms";
import {ProfileService} from "../../../logic/services/profile.service";

// describe('SectionContactComponent', () => {
//   let component: SectionContactComponent;
//   let fixture: ComponentFixture<SectionContactComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [SectionContactComponent],
//       imports:[ReactiveFormsModule,],
//       providers:[ProfileService]
//     })
//       .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(SectionContactComponent);
//     component = fixture.componentInstance;
//     component.contact = new ContactModel('test', 'test', 'test', 'test', 'test', 'test', 'test',)
//     component.myProfile = true
//     component.isAdmin = false
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
