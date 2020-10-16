import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../logic/dto/response/user-model";
import {Router} from "@angular/router";
import {AppPath} from "../../../../shared/enums/app-path.enum";


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


  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.dataSource = this.users;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  goToProfile(id: string) {
    this.router.navigate([AppPath.PROFILE_USER_PATH, {id: id}])
  }
}
