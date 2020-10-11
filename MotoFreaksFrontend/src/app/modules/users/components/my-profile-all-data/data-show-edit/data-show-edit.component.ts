import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-show-edit',
  templateUrl: './data-show-edit.component.html',
  styleUrls: ['./data-show-edit.component.scss']
})
export class DataShowEditComponent implements OnInit {

  @Input()
  value: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
