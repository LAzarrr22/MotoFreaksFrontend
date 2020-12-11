import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AllUserListComponent} from './all-user-list.component';
import {RouterTestingModule} from "@angular/router/testing";
import {UsersService} from "../../logic/services/users.service";

// describe('AllUserListComponent', () => {
//   let component: AllUserListComponent;
//   let fixture: ComponentFixture<AllUserListComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [AllUserListComponent],
//       imports:[RouterTestingModule],
//       providers:[UsersService]
//     })
//       .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(AllUserListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
