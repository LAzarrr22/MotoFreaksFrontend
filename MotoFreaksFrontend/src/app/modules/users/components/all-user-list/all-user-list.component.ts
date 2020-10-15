import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../logic/dto/response/user-model";


@Component({
  selector: 'app-all-user-list',
  templateUrl: './all-user-list.component.html',
  styleUrls: ['./all-user-list.component.scss']
})
export class AllUserListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'lastName', 'gender', 'points', 'isYourFriend'];
  dataSource;

  @Input()
  users: UserModel[];
  selectedElementId: string | null = null;


  constructor() {
  }

  ngOnInit(): void {
    const ELEMENT_DATA = this.users;
    this.dataSource = ELEMENT_DATA;
  }

  applyFilter(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  goToProfile(id: string) {
    console.log(id);
  }
}
