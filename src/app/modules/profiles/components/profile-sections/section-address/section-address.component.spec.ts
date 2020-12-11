import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SectionAddressComponent} from './section-address.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ProfileService} from "../../../logic/services/profile.service";
import {AuthService} from "../../../../authentication/logic/services/auth.service";
import {Input} from "@angular/core";
import {AddressModel} from "../../../logic/dto/models/address.model";

// describe('SectionAddressComponent', () => {
//   let component: SectionAddressComponent;
//   let fixture: ComponentFixture<SectionAddressComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [SectionAddressComponent],
//       imports: [ReactiveFormsModule],
//       providers:[ProfileService, AuthService]
//     })
//       .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(SectionAddressComponent);
//     component = fixture.componentInstance;
//     component.address= new AddressModel('test','test','test','test',)
//     component.myProfile=true
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
