import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SentenceModel} from "../../logic/model/sentence.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatDialog} from "@angular/material/dialog";
import {AddEditSentenceComponent} from "../add-edit-sentence/add-edit-sentence.component";
import {NewSentenceModel} from "../../logic/model/new-sentence.model";
import set = Reflect.set;

@Component({
  selector: 'app-all-sentence-list',
  templateUrl: './all-sentence-list.component.html',
  styleUrls: ['./all-sentence-list.component.scss']
})
export class AllSentenceListComponent implements OnInit, AfterViewInit {

  columnNames = {
    name: 'Sentence',
    translation: 'Translation',
  };
  displayedColumns = Object.keys(this.columnNames);

  dataSource: MatTableDataSource<SentenceModel>;

  resultsLength = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input()
  sentencesList: SentenceModel[]
  @Input()
  isModerator: boolean;

  @Output()
  mergeSentenceEvent = new EventEmitter<NewSentenceModel>();
  @Output()
  deleteSentenceEvent = new EventEmitter<string>();

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.sentencesList);

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  get allColumnsDisplayed() {
    return this.isModerator ? [...this.displayedColumns, 'Action'] : this.displayedColumns

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openModifyTopUp(object: SentenceModel = null) {
    const dialogRef = this.dialog.open(AddEditSentenceComponent, {
      data: object
    });
    dialogRef.afterClosed().subscribe(result => {
      console.dir(result)
      if (result) {
        this.mergeSentenceEvent.emit(result)
        setTimeout(() => {
          this.dataSource.data = this.sentencesList
        }, 500)
      }
    });

  }
}
