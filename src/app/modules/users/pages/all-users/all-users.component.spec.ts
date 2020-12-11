import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AllUsersComponent} from './all-users.component';
import {RouterTestingModule} from "@angular/router/testing";
import {AuthService} from "../../../authentication/logic/services/auth.service";
import {UsersService} from "../../logic/services/users.service";

// describe('AllUsersComponent', () => {
//   let component: AllUsersComponent;
//   let fixture: ComponentFixture<AllUsersComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [AllUsersComponent],
//       imports:[RouterTestingModule],
//       providers:[UsersService]
//     })
//       .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(AllUsersComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
