import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {UserModel} from "../../logic/dto/response/user-model";
import {Router} from "@angular/router";
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {UsersService} from "../../logic/services/users.service";


@Component({
  selector: 'app-all-user-list',
  templateUrl: './all-user-list.component.html',
  styleUrls: ['./all-user-list.component.scss']
})
export class AllUserListComponent implements OnInit, AfterViewInit {
  columnNames = {
    name: 'Name',
    lastName: 'Last name',
    gender: 'Gender',
    points: 'Points'
  };
  displayedColumns = Object.keys(this.columnNames);
  dataSource: MatTableDataSource<UserModel>;

  @Input()
  users: UserModel[];
  resultsLength = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private usersService: UsersService) {

  }

  get allColumnsDisplayed() {
    return [...this.displayedColumns, 'isYourFriend']

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToProfile(id: string) {
    this.router.navigate([AppPath.PROFILE_USER_PATH, {id: id}])
  }

  addFriend(id: string) {
    this.usersService.addFriend(id);
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.users);
    }, 1000)
  }
}
