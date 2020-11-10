import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {SentenceModel} from "../../logic/model/sentence.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

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
  sentencesList:SentenceModel[]

  constructor() {

  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.sentencesList);

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
}
