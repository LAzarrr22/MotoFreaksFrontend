import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SectionMyPersonalComponent} from './section-my-personal.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../../../authentication/logic/services/auth.service";
import {ProfileService} from "../../../logic/services/profile.service";

// describe('SectionPersonalComponent', () => {
//   let component: SectionMyPersonalComponent;
//   let fixture: ComponentFixture<SectionMyPersonalComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [SectionMyPersonalComponent],
//       imports:[ReactiveFormsModule],
//       providers: [AuthService,ProfileService]
//     })
//       .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(SectionMyPersonalComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
