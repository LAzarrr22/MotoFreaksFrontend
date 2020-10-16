import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {FriendUserModel} from "../../../logic/dto/response/friend-user.model";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {AppPath} from "../../../../../shared/enums/app-path.enum";

@Component({
  selector: 'app-section-friends',
  templateUrl: './section-friends.component.html',
  styleUrls: ['./section-friends.component.scss']
})
export class SectionFriendsComponent implements OnInit, AfterViewInit {
  @Input()
  friendsList: FriendUserModel[];
  @Input()
  myProfile: boolean = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'lastName', 'gender'];
  dataSource: MatTableDataSource<FriendUserModel>;
  resultsLength = 0;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.friendsList);
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

}
